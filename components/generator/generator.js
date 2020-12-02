import styled, {css} from 'styled-components';
import Link from 'next/link';
import getShortUrl from '../../lib/getShortUrl'
import {useState} from 'react';

const GeneratorContainer = styled.div`
    align-items: center;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 800px;
`;

const box = css`
    border: 2px solid black;
    border-radius: 10px;
    padding: 0.5rem;
    width: 70%;
`;

const UrlInput = styled.input`
    ${box};
    font-size: 1rem;
    height: 50px;
    &:focus {outline: none;}
`;

const SubmitButton = styled.button`
    border:none;
    border-radius: 15px;
    background: #92de34;
    color: #025600;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    height: 35px;
    width: 150px;
    margin: 5px;
    &:focus {outline: none;}
`;

const ResultContainer = styled.div`
    ${box};
    height: 100px;
`;

export default function Generator() {
    const [urlInput, setUrlInput] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const urlRequestHandler = (url) => {
        getShortUrl(url)
            .then(response => {setShortUrl(response);
            console.log(response)})
            .catch(() => setShortUrl('Error'));
    };

    return(
        <GeneratorContainer>
            <UrlInput onChange={(event) => {setUrlInput(event.target.value);}}/>
            <SubmitButton onClick={() => {urlRequestHandler(urlInput)}}>Get Url</SubmitButton>
            <ResultContainer>
                <Link href={shortUrl}><a>{shortUrl}</a></Link>
            </ResultContainer>
        </GeneratorContainer>
    );
}
