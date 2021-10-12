import React, { useState } from "react";
import { HeaderWrap, Button, SelectWrap, HeaderText } from './styles';

const Header = ({ setIsVisible, setMode }) => {

	const [choiceMode, setChoiceMode] = useState();

	const changeVisible = () => {
		setIsVisible(prevState => !prevState)
	}

	const selectHendler = (e) => {
		setChoiceMode(e.target.value)
		setMode(e.target.value)
	}
  return (
		<HeaderWrap>
			<SelectWrap>
			  <select value={choiceMode} onChange={(e) => selectHendler(e)}>
					<option value='easyMode'>EasyMode</option>
					<option value='normalMode'>NormalMode</option>
					<option value='hardMode'>HardMode</option>
				</select>
				<Button onClick={() => changeVisible()}>
					START
				</Button>
			</SelectWrap>
			<HeaderText>
				Hover squares
			</HeaderText>
		</HeaderWrap>
	);
}

export default Header