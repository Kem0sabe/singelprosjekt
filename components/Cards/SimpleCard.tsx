'use client'
import React from 'react';
import { Card } from '@digdir/designsystemet-react'
import '@digdir/designsystemet-theme';
import '@digdir/designsystemet-css';



export interface SimpleCardProps { // Exporting the type makes it possible to import it in other files
    title: string;
    text: string;
    }


export default function SimpleCard(props : SimpleCardProps) {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Content>{props.text}</Card.Content>
    </Card>
  )
}
