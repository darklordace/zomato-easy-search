import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			record: false,
			toSearch: ''
		}
	}

	startRecording = () => {
		document.querySelector(".recBtn .notRec").style.display = "none";
		document.querySelector(".recBtn .Rec").style.display = "inline";
		this.setState({
			record: true
		});
	}

	stopRecording = () => {
		document.querySelector(".recBtn .notRec").style.display = "inline";
		document.querySelector(".recBtn .Rec").style.display = "none";
		this.setState({
			record: false
		});
	}

	onData = (recordedBlob) => {
		// console.log('chunk of real-time data is: ', recordedBlob);
	}

	onStop = (recordedBlob) => {
		// console.log('recordedBlob is: ', recordedBlob);

		let formdata = new FormData();
		formdata.append('soundBlob', recordedBlob.blob, recordedBlob.blobURL);

		fetch(process.env.REACT_APP_API_URL + '/speechtotext', {
			method: 'post',
			body: formdata,
			headers: new Headers({
				'enctype': 'multipart/form-data' // the enctype is important to work with multer on the server
			})
		}).then(resp => resp.json())
		.then(data => {
			var input = document.getElementById('toSearch');
			input.value = data.results[0].alternatives[0].transcript;
			this.onInputChange({ target: { value: input.value }});
		})
		.catch(err => {
			console.log(err);
		});
	}

	onInputChange = (event) => {
		this.setState({ toSearch: event.target.value });
	}

	componentDidMount() {
		var input = document.getElementById('toSearch');
		input.addEventListener('keyup', (event) => {
			event.preventDefault();
			if (event.keyCode === 13) {
				document.getElementById('submitSearch').click();
			}
		});
	}

	render() {
		const { onSubmitSearch } = this.props;
		return (
			<div className="searchBar">
				<input
					className="pa2 input-reset ba bg-transparent hover-bg-black hover-white f5 w-60"
					type="text" name="toSearch" id="toSearch" onChange={this.onInputChange}
				/>
				<div className="dib recBtn">
					<button onClick={this.startRecording} type="button" className="notRec"></button>
					<button onClick={this.stopRecording} type="button" className="Rec"></button>
				</div>
				<button
					className="b pv2 input-reset ba b--black bg-transparent grow pointer f5 dib w-10"
					id="submitSearch" onClick={() => onSubmitSearch(this.state.toSearch)}
				>Search</button>
				<br/>
				<div className='hide'>
					<ReactMic
						record={this.state.record}
						className="sound-wave"
						onStop={this.onStop}
						onData={this.onData}
						strokeColor="#000000"
						backgroundColor="#FF4081" />
				</div>
			</div>
		);
	}
}

export default SearchBar;