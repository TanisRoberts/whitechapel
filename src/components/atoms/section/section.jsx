import React, { Component, useState, useEffect } from 'react';
import Card from '../../molecules/card/card';
import { CircularProgress } from '@mui/material';

export default function Section (props) {

  return <div className={`section ${props.first ? "section--first" : ""}`}>
    {props.children}
  </div>
}