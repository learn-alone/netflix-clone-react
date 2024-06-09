import './YoutubePlayer.css'
import YouTube from 'react-youtube'

function YoutubePlayer({youState, updateYouState}) {
  const opts = { height: '100%', width: '100%', playerVars: { autoplay: 1, fs: 1, cc_lang_pref:0, color: 'red', cc_load_policy: 0, disablekb: 1, controls: 0, iv_load_policy: 1, rel: 0, autohide: 0 },};
  const handYouState = ()=>{  updateYouState( false, "" ) }

  return ( <>
            {youState.isPlay &&   <div  className='youStyle'>
                                  <div className='videoHead'>
                                      <img className='videoLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix Logo'/>
                                      <div onClick={()=>{ handYouState()} } className='vidClose'/> </div>
                                  <YouTube style={{height:'inherit'}} videoId={youState.youLink} opts={opts}/>  </div> }
    </>
  )
}

export default YoutubePlayer
