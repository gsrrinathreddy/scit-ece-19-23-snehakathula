import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.search.yahoo.com/search/images;_ylt=AwrOuU0t_iNklAgFW1BXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMyNTQzNFNDXzEEc2VjA3Nj?p=dancing+pics&type=E211US714G0&ei=UTF-8&fr=mcafee&th=108.1&tw=192.6&imgurl=https%3A%2F%2Fcms.qz.com%2Fwp-content%2Fuploads%2F2019%2F12%2FThe-power-of-dance-e1575906582595.jpg%3Fquality%3D75%26strip%3Dall%26w%3D1200%26h%3D630%26crop%3D1&rurl=https%3A%2F%2Fqz.com%2F1764294%2Fhow-dance-fights-depression-parkinsons-and-other-brain-disease%2F&size=1371KB&name=How+dance+fights+depression%2C+Parkinson%27s%2C+and+other+brain+disease+%E2%80%94+Quartz&oid=12&h=2690&w=4783&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MFu_FQK8Wis3EnHJ5CQ4-gHaEK%26pid%3DApi%26rs%3D1%26c%3D1%26qlt%3D95%26w%3D192%26h%3D108&tt=How+dance+fights+depression%2C+Parkinson%27s%2C+and+other+brain+disease+%E2%80%94+Quartz&sigr=8aBGio72dhTt&sigit=u3GPL0.4FpD5&sigi=_Zh7dXUoQe_n&sign=MCztaegzo_Xd&sigt=MCztaegzo_Xd',
    title: 'Dancing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.search.yahoo.com/images/view;_ylt=Awr9.SOM_iNk3Acb0JiJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzBkZTg2OThkNDIwZWEwYWMwNDkzMWVjNzExY2I1Y2Q0BGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dphotographhy%2Bpics%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=550&h=500&imgurl=d1dmo9iwh0r4qt.cloudfront.net%2F%7E%2Fmedia%2Fai%2Fmain%2Fimages%2Fpublications%2Fblog%2Fonlinephotonov%2Fphotographyphoto.ashx%3Fmodified%3D20181123034155%26la%3Den%26hash%3D061F51B0825AEC249CED44DB5E32432D3FEA05C2&rurl=https%3A%2F%2Fwww.artinstitutes.edu%2Fabout%2Fblog%2F38780-v2-7-types-of-photography-styles-to-master&size=74.2KB&p=photographhy+pics&oid=0de8698d420ea0ac04931ec711cb5cd4&fr2=piv-web&fr=mcafee&tt=7+Types+of+Photography+Styles+to+Master&b=0&ni=21&no=12&ts=&tab=organic&sigr=zOLXNGF5S5mI&sigb=vwaH2Y.XkUHI&sigi=WiPQGUOgwv3B&sigt=IRoxzdg_tVWK&.crumb=EHFZva0/yLn&fr=mcafee&fr2=piv-web&type=E211US714G0',
    title: 'Camera',
    
  },
  {
    img: 'https://images.search.yahoo.com/images/view;_ylt=Awr9.SMR_yNk_b4abw2JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2E5YmI2MmM1YTE2MTEyNjFkYzkzYjU3YjM2Y2YzNDIzBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcooing%2Bpics%26ei%3DUTF-8%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D3&w=3004&h=2324&imgurl=www.durasupreme.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fstovetop-cooking-gas-cooktop.jpg&rurl=https%3A%2F%2Fwww.durasupreme.com%2Fblog%2Fkitchen-design-cooking-gas-or-electric%2F&size=508.5KB&p=cooing+pics&oid=a9bb62c5a1611261dc93b57b36cf3423&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Kitchen+Design%3A+Cooking+with+Gas+or+Electric%3F+-+Dura+Supreme+Cabinetry&b=0&ni=75&no=3&ts=&tab=organic&sigr=Z.UcEMgvvwHa&sigb=nt.Wpu4PmDt4&sigi=6Lr1Y0xUaNEw&sigt=EEKTKUUQ238H&.crumb=EHFZva0/yLn&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US714G0',
    title: 'Cooking',
    
    cols: 2,
  },
  {
    img: 'https://images.search.yahoo.com/images/view;_ylt=AwrO6eKB_yNkiNIZmGeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzVlMzY0MTc5ODA5MWE5NmZiNGZhYzNkMDc3OTc4OWZiBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dreading%2Bbooks%26ei%3DUTF-8%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D3&w=5000&h=3333&imgurl=wallpapercave.com%2Fwp%2Fwp8252130.jpg&rurl=https%3A%2F%2Fwallpapercave.com%2Fwomen-reading-book-wallpapers&size=1561.7KB&p=reading+books&oid=5e3641798091a96fb4fac3d0779789fb&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Women+Reading+Book+Wallpapers+-+Wallpaper+Cave&b=0&ni=75&no=3&ts=&tab=organic&sigr=I.obAW420VGl&sigb=acmhCwDuBEK9&sigi=UsW54P8xDHgp&sigt=SQWj9ntBbw.7&.crumb=EHFZva0/yLn&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US714G0',
    title: 'Books',
    
    cols: 2,
  },
  {
    img: 'https://images.search.yahoo.com/images/view;_ylt=AwrO_kS__yNkauQaGOGJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzA1NDQxMzdmNGI2NzM1YTE3MDE2YjU4MzBkYTAzZjEzBGdwb3MDNgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsleep%2Bpics%26ei%3DUTF-8%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D6&w=2000&h=1334&imgurl=assets.entrepreneur.com%2Fcontent%2F3x2%2F2000%2F20160830071225-sleep.jpeg&rurl=https%3A%2F%2Fwww.entrepreneur.com%2Farticle%2F286617&size=125.6KB&p=sleep+pics&oid=0544137f4b6735a17016b5830da03f13&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Entrepreneur%26%2339%3Bs+Best+Advice+for+Good+Sleep&b=0&ni=75&no=6&ts=&tab=organic&sigr=c_B72nYkQgOQ&sigb=4H9DKKW7ZvLq&sigi=9wmpsmqAwTMo&sigt=MQG9OtKuPJF9&.crumb=EHFZva0/yLn&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US714G0',
    title: 'Sleep',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img:'https://images.search.yahoo.com/images/view;_ylt=AwrO_kQoASRkxlMaX8SJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzAyZDMzNGRjMDVlNDg2NGJiZDgwZjIxMjgwZmNhNzVmBGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsocial%2Bmedia%2Bpics%26ei%3DUTF-8%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D5&w=2560&h=1970&imgurl=www.webtms.com%2Fwp-content%2Fuploads%2F2020%2F08%2FSocial-media-v2-scaled.jpg&rurl=https%3A%2F%2Fwww.webtms.com%2Fgoing-social-protecting-your-social-media-brand%2F&size=664.3KB&p=social+media+pics&oid=02d334dc05e4864bbd80f21280fca75f&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Going+social+%E2%80%93+protecting+your+social+media+brand+-+Web+TMS&b=0&ni=75&no=5&ts=&tab=organic&sigr=256zDSH2KpSM&sigb=KuidCRaZM_sn&sigi=6_YlsHSthcCE&sigt=UmeKCTbb_kB3&.crumb=EHFZva0/yLn&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US714G0',
    title: 'Socialmedia',
    
  },
  {
    img: 'https://images.search.yahoo.com/images/view;_ylt=AwrjdAwaAyRkGtYaJCSJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2IwZjMzY2FkNjhhN2FlOWJkZDFkMTRlZTFjOWM1M2ZmBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dduke%2Bbike%2Bpics%26ei%3DUTF-8%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D12&w=1920&h=1080&imgurl=wallpapercave.com%2Fwp%2Fwp2050718.jpg&rurl=https%3A%2F%2Fwallpapercave.com%2Fduke-bike-wallpapers&size=347.2KB&p=duke+bike+pics&oid=b0f33cad68a7ae9bdd1d14ee1c9c53ff&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Duke+Bike+Wallpapers+-+Wallpaper+Cave&b=0&ni=75&no=12&ts=&tab=organic&sigr=wpftNhVHYdq1&sigb=30JJShgQOf87&sigi=1ndwOtGAVjuS&sigt=Qds_iyWhGAmL&.crumb=EHFZva0/yLn&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US714G0',
    title: 'Bike',
  
    cols: 2,
  },
];