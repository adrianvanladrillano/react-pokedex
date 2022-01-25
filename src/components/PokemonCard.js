import * as React from 'react';
import { styled } from '@mui/material/styles';

import { Card, CardHeader, Avatar, IconButton } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { red } from '@mui/material/colors';

export default function PokemonCard({ pokemon }) {

    let { name, sprites } = pokemon

    return (
        <Card sx={{ mb: 3 }}>
            <CardHeader
                avatar={
                    <img src={sprites.front_default} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader="September 14, 2016"
            />
        </Card>
    );
}