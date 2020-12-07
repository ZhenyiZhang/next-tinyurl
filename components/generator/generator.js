import {useState} from 'react';

import styled, {css} from 'styled-components';
import Link from 'next/link';

import getShortUrl from '../../lib/functions/getShortUrl';
import Button from '../buttons/button';

const GeneratorContainer = styled.div`
    border-radius: 5%;
    display: grid;
    grid-auto-rows: 4fr 1fr 2fr;
    height: 40vh;
    padding: 1rem;
    justify-items: center;
    width: 70vw;
`;

const box = css`
    border: 2px solid black;
    border-radius: 10px;
    font-size: 1.5rem;
    height: 100%;
    padding: 0.5rem;
    width: 100%;
`;

const UrlInput = styled.textarea`
    ${box};
    &:focus {outline: none;}
`;

const ResultContainer = styled.div`
    ${box};
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
            <UrlInput type="text" onChange={(event) => {setUrlInput(event.target.value);}}/>
            <Button lightRed medium round transparent onClick={() => {urlRequestHandler(urlInput)}}>Get Url</Button>
            <ResultContainer>
                <Link href={shortUrl}><a>{shortUrl}</a></Link>
            </ResultContainer>
        </GeneratorContainer>
    );
}
