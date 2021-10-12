import React, { useState, useEffect } from "react";
import { SquarConteiner, Box, BoxText } from './styles';
const Squar = ({ setStore, mode, isVisible }) => {
	const [boxes, setBoxes] = useState([])
  const changeColor = (box) => {
    const result = [...boxes];
    const res = result.map((item) => {
			if(item.index === box){
				return {color: !item.color, index: item.index}
			} else {
				return item;
			}
		})

	  setBoxes(res);
    setStore((prevState) => [...prevState, `box choice ${box}`])
	} 
	const getBoxes = (size) => {
		const arr = []

		for (let i = 1; i <= size; i++) {
		   arr.push({color: true, index: i})
		}

		setBoxes(arr)
	}

	useEffect(() => {
		getBoxes(25)
	}, [mode, setBoxes, isVisible])

  return (
		<>
		  {isVisible ? (
				  <SquarConteiner>
					{boxes.map((item, index) => (
						<Box key={index} onClick={() => changeColor(item.index)} inputColor={item.color}/>
					))}
				</SquarConteiner>
			) : (
				<BoxText>Choice mode</BoxText>
			)}
		</>
	);
};

export default Squar;