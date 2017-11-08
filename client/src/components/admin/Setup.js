import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { ChromePicker } from 'react-color';
import Inputv2 from './components/Input';
import dropper from '../../images/dropper.svg';
import Imageupload from './components/ImageUpload';


export default class Setup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      colorbgpanel: false,
      colorsectbg:false,
      colorsectheader:false,
      colorsectlink:false,
      colorsectbody:false,
      colorsectborder:false,

      colorheader1:false,
      colorheader2:false,
      headersize:"",

      hexbg:"",
      hexsectbg:"",
      hexsectheader:"",
      hexsectlink:"",
      hexsectbody:"",
      hexsectborder:"",

      hexheader1:"",
      hexheader2:"",

      headerfont:"",
      bodyfont:"",
    }

    /*toggle color displays*/
    this.togglecolorbg = this.togglecolorbg.bind(this);
    this.closecolorbg = this.closecolorbg.bind(this);

    this.togglecolorsectbg= this.togglecolorsectbg.bind(this);
    this.closecolorsectbg = this.closecolorsectbg.bind(this);

    this.togglecolorsectheader = this.togglecolorsectheader.bind(this);
    this.closecolorsectheader = this.closecolorsectheader.bind(this);

    this.togglecolorsectlink = this.togglecolorsectlink.bind(this);
    this.closecolorsectlink = this.closecolorsectlink.bind(this);
    
    this.togglecolorsectbody=this.togglecolorsectbody.bind(this);
    this.closecolorsectbody=this.closecolorsectbody.bind(this);

    this.togglecolorsectborder=this.togglecolorsectborder.bind(this);
    this.closecolorsectborder=this.closecolorsectborder.bind(this);

    this.togglecolorheader1=this.togglecolorheader1.bind(this);
    this.closecolorheader1=this.closecolorheader1.bind(this);

    this.togglecolorheader2=this.togglecolorheader2.bind(this);
    this.closecolorheader2=this.closecolorheader2.bind(this);
    
    /*color input box*/
    this.hexcolorbg = this.hexcolorbg.bind(this);
    this.hexsectbg=this.hexsectbg.bind(this);
    this.hexsectheader=this.hexsectheader.bind(this);
    this.hexsectlink = this.hexsectlink.bind(this);
    this.hexsectbody=this.hexsectbody.bind(this);
    this.hexsectborder=this.hexsectborder.bind(this);
    
    this.inputheadersize=this.inputheadersize.bind(this);

    /*fonts*/
    this.sendheaderfont=this.sendheaderfont.bind(this);
    this.sendbodyfont=this.sendbodyfont.bind(this);
  }

  componentDidMount(){
  }

  sendheadercolor1(color){
    this.setState({ hexbg: color },()=>{
      this.props.getheadercolor1(this.state.hexheader1)
      });
  }
  sendheadercolor2(color){
    this.setState({ hexbg: color },()=>{
      this.props.getheadercolor2(this.state.hexheader2)
      });
  }


  sendheaderfont(e){
    this.setState({
        headerfont: e.target.value,
    },()=>{
      this.props.getheaderfont(this.state.headerfont)
    });
  }
  sendbodyfont(e){
    this.setState({
      bodyfont: e.target.value,
  },()=>{
    this.props.getbodyfont(this.state.bodyfont)
  });
  }

  hexcolorbg(color){
    this.setState({ hexbg: color },()=>{
    this.props.getcolorbg(this.state.hexbg)
    });
  }
  hexsectbg(color){
    this.setState({ hexbg: color },()=>{
    this.props.getsectbg(this.state.hexbg)
    });
  }
  hexsectheader(color){
    this.setState({ hexbg: color },()=>{
      this.props.getsectheader(this.state.hexbg)
      });
  }
  hexsectlink(color){
    this.setState({ hexbg: color },()=>{
      this.props.getsectlink(this.state.hexbg)
      });
  }
  hexsectbody(color){
    this.setState({ hexbg: color },()=>{
      this.props.getsectbody(this.state.hexbg)
      });
  }
  hexsectborder(color){
    this.setState({ hexbg: color },()=>{
      this.props.getsectborder(this.state.hexbg)
      });
  }

  inputheadersize(size){
    this.setState({ headersize: size },()=>{
      this.props.getheadersize(this.state.headersize)
      });
  }

  togglecolorbg(){
    this.setState({ colorbgpanel: !this.state.colorbgpanel })
  };
  closecolorbg(){
    this.setState({ colorbgpanel: false })
  };

  togglecolorsectbg(){
    this.setState({ colorsectbg: !this.state.colorsectbg })
  };
  closecolorsectbg(){
    this.setState({ colorsectbg: false })
  };

  togglecolorsectheader(){
    this.setState({ colorsectheader: !this.state.colorsectheader })
  };
  closecolorsectheader(){
    this.setState({ colorsectheader: false })
  };

  togglecolorsectlink(){
    this.setState({ colorsectlink: !this.state.colorsectlink })
  };
  closecolorsectlink(){
    this.setState({ colorsectlink: false })
  };

  togglecolorsectbody(){
    this.setState({ colorsectbody: !this.state.colorsectbody })
  };
  closecolorsectbody(){
    this.setState({ colorsectbody: false })
  };

  togglecolorsectborder(){
    this.setState({ colorsectborder: !this.state.colorsectborder })
  };
  closecolorsectborder(){
    this.setState({ colorsectborder: false })
  };

  togglecolorheader1(){
    this.setState({ colorheader1: !this.state.colorheader1 })
  };
  closecolorheader1(){
    this.setState({ colorheader1: false })
  };
  togglecolorheader2(){
    this.setState({ colorheader2: !this.state.colorheader2 })
  };
  closecolorheader2(){
    this.setState({ colorheader2: false })
  };




  changebackground = (color) => {
    this.setState({ hexbg: color.hex });
    this.props.getcolorbg(this.state.hexbg);
  };

  changesectbg = (color) => {
    this.setState({ hexsectbg: color.hex });
    this.props.getsectbg(this.state.hexsectbg);
  };
  changesectheader = (color) => {
    this.setState({ hexsectheader: color.hex });
    this.props.getsectheader(this.state.hexsectheader);
  };
  changesectlink = (color) => {
    this.setState({ hexsectlink: color.hex });
    this.props.getsectlink(this.state.hexsectlink);
  };
  changesectbody = (color) => {
    this.setState({ hexsectbody: color.hex });
    this.props.getsectbody(this.state.hexsectbody);
  };
  changesectborder = (color) => {
    this.setState({ hexsectborder: color.hex });
    this.props.getsectborder(this.state.hexsectborder);
  };
  changecolorheader1 = (color) => {
    this.setState({ hexheader1: color.hex });
    this.props.getheadercolor1(this.state.hexheader1);
  };
  changecolorheader2 = (color) => {
    this.setState({ hexheader2: color.hex });
    this.props.getheadercolor2(this.state.hexheader2);
  };



  render(){
    const previewcontainer={
      marginTop:"3em",
      width:"100%",
      height:"600px",
      border:"1px solid #000",
      backgroundColor:this.props.colorbg,
    }
    const previewsection={
      height:"300px",
      position:"absolute",
      bottom:"50px",
      backgroundColor:this.props.colorsectbg,
      border:"1px solid "+this.props.colorsectborder,
    }
    const previewsectheader={
      fontSize:this.props.headersize,
      color:this.props.colorsectheader,
      fontWeight:"600",
    }
    const previewsectlink={
      color:this.props.colorsectlink,
    }
    const previewsectbody={
      color:this.props.colorsectbody,
    }

    const previewheader={
      fontSize:"3em",
      fontFamily:this.props.headerfont,
      fontWeight:"600",
    }
    const previewbody={
      fontFamily:this.props.bodyfont,
    }
    const headergradient={
      background:"linear-gradient(90deg,"+this.props.headercolor1+","+this.props.headercolor2+")",
      width:"100%",
      height:"100px",
    }

    return(
      <div>

    <Col md = {6}>
      <div className = 'admin_setup__title'>
        Page
      </div>
      
      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className = 'admin_setup__label'>Background:</span>   
        </Col>
        <Col md = {4} sm = {4} xs = {4} >
        <Inputv2 type="text" name="background" placeholder={this.props.colorbg} getvalue={this.hexcolorbg}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4} >
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorbg } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorbgpanel ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorbg }/>
          <ChromePicker 
          color={ this.props.colorbg }
          onChangeComplete={ this.changebackground }/>
        </div> : null }
      </Col>
      </Row>

      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Header Color 1:</span>   
        </Col>
        <Col md = {4} sm = {4} xs = {4} >
        <Inputv2 type="text" name="background" placeholder={this.props.headercolor1} getvalue={this.hexheader1}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4} >
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorheader1 } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorheader1 ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorheader1 }/>
          <ChromePicker 
          color={ this.props.headercolor1 }
          onChangeComplete={ this.changecolorheader1 }/>
        </div> : null }
      </Col>
      </Row>

      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Header Color 2:</span>   
        </Col>
        <Col md = {4} sm = {4} xs = {4} >
        <Inputv2 type="text" name="background" placeholder={this.props.headercolor2} getvalue={this.hexheader2}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4} >
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorheader2 } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorheader2 ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorheader2 }/>
          <ChromePicker 
          color={ this.props.headercolor2 }
          onChangeComplete={ this.changecolorheader2 }/>
        </div> : null }
      </Col>
      </Row>
    
      <Row className = 'admin_setup__row'>
      <Col md = {4} sm = {4} xs = {4}>
      <span className='admin_setup__label'>Header Image: </span>
       </Col>
       <Col md = {4} sm = {4} xs = {4} >
       <Imageupload/>
       </Col>
       </Row>

       <Row className = 'admin_setup__row'>
       <Col md = {4} sm = {4} xs = {4}>
       <span className='admin_setup__label'>Header font:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <select defaultValue={this.props.headerfont} onChange={(e)=>this.sendheaderfont(e)} className = 'admin_setup__language'>
          <option value="georgia">Georgia</option>
          <option value="palatino linotype">Palatino Linotype</option>
          <option value="times new roman">Times New Roman</option>
          <option value="Open Sans">Open Sans</option>
          <option value="arial">Arial</option>
          <option value="arial black">Arial Black</option>
          <option value="comic sans ms">Comic Sans MS</option>
          <option value="impact">Impact</option>
          <option value="lucida sans unicode">Lucida Sans Unicode</option>
          <option value="tahoma">Tahoma</option>
          <option value="trebuchet ms">Trebuchet MS</option>
          <option value="verdana">Verdana</option>
          <option value="courier new">Courier New</option>
          <option value="lucida console">Lucida Console</option>
        </select>
        </Col>
        </Row>

        <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Body font:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <select defaultValue={this.props.bodyfont} onChange={(e)=>this.sendbodyfont(e)} className = 'admin_setup__language'>
        <option value="georgia">Georgia</option>
        <option value="palatino linotype">Palatino Linotype</option>
        <option value="times new roman">Times New Roman</option>
        <option value="Open Sans">Open Sans</option>
        <option value="arial">Arial</option>
        <option value="arial black">Arial Black</option>
        <option value="comic sans ms">Comic Sans MS</option>
        <option value="impact">Impact</option>
        <option value="lucida sans unicode">Lucida Sans Unicode</option>
        <option value="tahoma">Tahoma</option>
        <option value="trebuchet ms">Trebuchet MS</option>
        <option value="verdana">Verdana</option>
        <option value="courier new">Courier New</option>
        <option value="lucida console">Lucida Console</option>
        </select>
        </Col>
        </Row>
        <br/>



      <div className='admin_setup__title'>Sections</div>
      <Row className = 'admin_setup__row'>
      <Col md = {4} sm = {4} xs = {4}>
      <span className='admin_setup__label'>Background:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <Inputv2 type="text" name="background" placeholder={this.props.colorsectbg} getvalue={this.hexsectbg}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorsectbg } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorsectbg ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorsectbg }/>
          <ChromePicker 
          color={ this.props.colorsectbg }
          onChangeComplete={ this.changesectbg }/>
        </div> : null }
        </Col>
        </Row>


      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Header Text:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <Inputv2 type="text" name="background" placeholder={this.props.colorsectheader} getvalue={this.hexsectheader}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorsectheader} alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorsectheader ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorsectheader }/>
          <ChromePicker 
          color={ this.props.colorsectheader }
          onChangeComplete={ this.changesectheader }/>
        </div> : null }
        </Col>
      </Row>

      {/*section header size*/}
      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Header Size:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
          <Inputv2 type="text" name="headersize" placeholder={this.props.headersize} getvalue={this.inputheadersize}/>
          </Col>
      </Row>

      {/*section body color*/}
      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Body:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <Inputv2 type="text" name="background" placeholder={this.props.colorsectbody} getvalue={this.hexsectbody}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorsectbody } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorsectbody ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorsectbody }/>
          <ChromePicker 
          color={ this.props.colorsectbody }
          onChangeComplete={ this.changesectbody }/>
        </div> : null }
        </Col>
      </Row>

      {/*section link color*/}
      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Link Text:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <Inputv2 type="text" name="background" placeholder={this.props.colorsectlink} getvalue={this.hexsectlink}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorsectlink } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorsectlink ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorsectlink }/>
          <ChromePicker 
          color={ this.props.colorsectlink }
          onChangeComplete={ this.changesectlink }/>
        </div> : null }
        </Col>
      </Row>


      {/*section border color*/}
      <Row className = 'admin_setup__row'>
        <Col md = {4} sm = {4} xs = {4}>
        <span className='admin_setup__label'>Border:</span>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <Inputv2 type="text" name="background" placeholder={this.props.colorsectborder} getvalue={this.hexsectborder}/>
        </Col>
        <Col md = {4} sm = {4} xs = {4}>
        <img src={dropper} className= 'admin_setup__dropper' onClick={ this.togglecolorsectborder } alt="Eye Dropper By Gregor Cresnar"/>
        { this.state.colorsectborder ? <div className = 'admin_setup__popover'>
          <div className = 'admin_setup__cover' onClick={ this.closecolorsectborder }/>
          <ChromePicker 
          color={ this.props.colorsectborder }
          onChangeComplete={ this.changesectborder }/>
        </div> : null }
        </Col>
      </Row>


    </Col>

    <Col md = {6}>
    <div style={previewcontainer}>
    <Col md = {10} mdOffset={1} sm = {10} smOffset={1} xs = {10} xsOffset={1} >
      <div style={previewheader}>
      Header
      </div>
      <div style={previewbody}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div style={headergradient}></div>

    </Col>
    <Col md = {10} mdOffset={1} sm = {10} smOffset={1} xs = {10} xsOffset={1} style={previewsection}>
    <div style={previewsectheader}>
    Section Header
    </div>
    <div style={previewsectbody}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <br/>
    <Link to='/admin/setup' style={previewsectlink}>Link</Link>
    </div>
    </Col>
    </div>

    </Col>

      </div>
    )
  }
}