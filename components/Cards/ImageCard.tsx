'use client';
import { Card } from '@digdir/designsystemet-react';
import Image from 'next/image';
import '@digdir/designsystemet-theme';
import '@digdir/designsystemet-css';


import { SimpleCardProps } from './SimpleCard';


export interface ImageCardProps extends SimpleCardProps { 
  imageSrc: string;
}

export default function ImageCard(props : ImageCardProps) {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Content>{props.text}</Card.Content>
      <Card.Media>
        <Image src={props.imageSrc} 
          width = {300} height = {200} 
          alt="Her skulle det vært et fint lite bilde av et søtt dyr elns" />
      </Card.Media>
      <Card.Footer>Henter fra: {props.imageSrc}</Card.Footer>
    </Card>
  );
}
