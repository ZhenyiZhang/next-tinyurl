import styled, {css} from 'styled-components'
import Link from 'next/link'
import Button from '../buttons/Button'
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
            <Button lightRed medium round transparent onClick={() => {urlRequestHandler(urlInput)}}>Get Url</Button>
            <ResultContainer>
                <Link href={shortUrl}><a>{shortUrl}</a></Link>
            </ResultContainer>
        </GeneratorContainer>
    );
}
