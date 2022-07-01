import React, {useState} from 'react'
import {numbers , upperCaseLetters , lowerCaseLetters , specialCharacters} from './characters'
import './App.css';

function App() {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(10)
    const [includeUpperCase, setIncludeUpperCase] = useState(false)
    const [includeLowerCase, setIncludeLowerCase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)

const handleGeneratePassword = (e) => {
    let characterList = ''

    if(includeLowerCase){
        characterList = characterList + lowerCaseLetters
    }

    if(includeUpperCase){
        characterList = characterList + upperCaseLetters
    }

    if(includeNumbers){
        characterList = characterList + numbers
    }

    if(includeSymbols){
        characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList))
}

const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for(let i=0 ; i<passwordLength ; i++){
        const characterIndex = Math.round(Math.random() * characterListLength)
        password = password + characterList.charAt(characterIndex)
    }
    return password
}

const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
}

const handleCopyPassword = (e) => {
    copyToClipboard()
}

    return(
     <div className = 'App' >
        <div className="container">
            <div className="generator">
                <h2 className="generator__header" >Password Generator</h2>
                <div className="generator__password">
                    <h3>{password}</h3>
                    <button onClick= {handleCopyPassword} className="copy__btn">
                        <i className='fa fa-clipboard'></i>
                    </button>
                </div>

                <div className="form-group">
                    <label htmlFor="password-strength">Password Length</label>
                    <input defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number" id="password-strength" name="password-strength" max="20" min="8"/>
                </div>

                <div className="form-group">
                    <label htmlFor="uppercase-letters">Include UpperCase Letters</label>
                    <input checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} type="checkbox" id="uppercase-letters" name="uppercase-letters"/>
                </div>

                <div className="form-group">
                    <label htmlFor="lowercase-letters">Include LowerCase Letters</label>
                    <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters"/>
                </div>

                <div className="form-group">
                    <label htmlFor="include-numbers">Include Numbers</label>
                    <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}  type="checkbox" id="include-numbers" name="include-numbers"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inlcude-symbols">Include Symbols</label>
                    <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="inlcude-symbols" name="inlcude-symbols"/>
                </div>

                <button onClick={handleGeneratePassword} className="generator__btn">Generate Password</button>
            </div>
        </div>
    </div>
    );
}

export default App