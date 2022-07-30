import {  Container, Grid, ImageList, ImageListItem } from '@mui/material'

import React from 'react'

export default function Gallery() {
  const itemData = [
    {
      img: 'https://fastly.4sqi.net/img/general/600x600/17993775_HRAadLEwwDRDmfv0sR4CmEas-qVOswauHvlQcZWN4HM.jpg',
      title: 'Muay Thai training',
    },
    {
      img: 'https://miro.medium.com/max/1400/1*F7P47uhxj6FiN2cHoiYL4w.jpeg',
      title: 'fighter',
    },
    {
      img: 'https://cdn.onefc.com/wp-content/uploads/2020/09/Felipe-Lobo-Yodpanomrung-Jitmuangnon-Muay-Thai-1920X1280-29.jpg',
      title: 'Muay Thai match',
    },
    {
      img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/32/0b.jpg',
      title: 'Front kick',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0224/6724/8200/files/muay_thai_benefits1.jpg?v=1576065093',
      title: 'pao training',
    },
    {
      img: 'https://zebraathletics.com/wp-content/uploads/2018/11/ZC-MT_MUAY_THAI_BAG-PRODUCT1-scaled.jpg',
      title: 'bag training',
    },
    {
      img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/1f/f2.jpg',
      title: 'group training',
    },
    {
      img: 'https://www.thephuketfightclub.com/wp-content/uploads/2021/03/The-Phuket-Fight-Club-Gallery-2021-19-980x655.jpg',
      title: 'BJJ tournament',
    },
    {
      img: 'https://evolve-vacation.com/wp-content/uploads/2019/03/BJJ-Ego.jpg',
      title: 'BJJ ground',
    },
    {
      img: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-brazilian-jiu-jitsu-21abb64f-ddd9-4ce1-9e37-cfebc277285a.jpg?resize=1800,1200&w=1800',
      title: 'BJJ ground 2',
    },
    {
      img: 'https://cdn.evolve-mma.com/wp-content/uploads/2021/09/BJJ-Americana.jpg',
      title: 'BJJ lock',
    },
    {
      img: 'https://libertiesdublin.ie/wp-content/uploads/2019/11/Jungle-BJJ.jpg',
      title: 'BJJ section',
    },
  ];

  return (
    <div>
    <Container component ="main" maxWidth="md">
       
      <Grid item>
        <ImageList sx={{mt:10, width: 650, height: 670 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
      </Grid>
    </Container>
    </div>
  )
}
