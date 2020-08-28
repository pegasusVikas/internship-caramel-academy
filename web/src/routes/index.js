import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
//import App from '../App';
// import Home from '../Home/Home';
import "../Background.css";
import "../App.css";
import axios from "axios";
import userContext from '../components/context/user/userContext'

import Apply from "../components/evaluation/Apply";
import AddCourse from "../components/AddCourse";
import Itservices from "../components/Home/Itservices";
import MainProgram from "../components/Programs/MainProgram";
import Main from "../components/Main";
import MainFrontend from "../components/SubPrograms/UI/MainFrontend";
import MainBackEnd from "../components/SubPrograms/Backend/MainBackEnd";
import MainFt from "../components/SubPrograms/FT/MainFt";
import MainFullstack from "../components/SubPrograms/Fullstack/MainFullstack";
import MainMobility from "../components/SubPrograms/Mobility/MainMobility";
import MainDevops from "../components/SubPrograms/DevOps/MainDevops";
import MainDataSci from "../components/SubPrograms/Datascience/MainDataSci";
import MainCloudComputing from "../components/SubPrograms/CloudComputing/MainCloudComputing";
import MainCyber from "../components/SubPrograms/Cyber/MainCyber";
import MainDigMar from "../components/SubPrograms/Digital/MainDigMar";
import MainERP from "../components/SubPrograms/ERP/MainERP";
import MainIT from "../components/SubPrograms/IT/MainIT";
import MainItCertification from "../components/SubPrograms/ItCertification/MainItCertification";

import Recommendations from "../components/Caramel/recommendations";
import SignIn from "../components/Login/Student/SignIn";
import SignUp from "../components/Login/Student/SignUp";
import StudentDashboard from "../components/Login/Student/dashboard";
import ForgotPass from "../components/Login/Student/ForgotPass";
import UserSignIn from "../components/Login/User/UserSignIn";
import UserSignUp from "../components/Login/User/UserSignUp";
import UserDashboard from "../components/Login/User/UserDashboard";
import UserForgotPass from "../components/Login/User/UserForgotPass";
import SignInCollege from "../components/Login/College/SignInCollege";
import SignUpCollege from "../components/Login/College/SignUpCollege";
import CollegeDashboard from "../components/Login/College/dashboard";
import SignIn2 from "../components/Login/Instructor/SignInInstructor";
import InstructorDashboard from "../components/Login/Instructor/dashboard";
import SignIn3 from "../components/Login/Organisation/SignInOrganisation";
import OrganisationDashboard from "../components/Login/Organisation/dashboard";
import SignIn4 from "../components/Login/Others/SignIn4";
import AdminDashboard from "../components/Login/Others/test";
import SignUp2 from "../components/Login/Instructor/SignUpInstructor";
import SignUp3 from "../components/Login/Organisation/SignUpOrganisation";
import AdminSignup from "../components/Login/Others/SignUp";
// import Test from './components/test';
import BackGround from "../Background";
//import Dashboard from '../components/Student/dashboard';
//import AddCourse from "../components/Login/Others/addCourse";
import AddCategory from "../components/Login/Others/addCategory";
import ViewCategory from "../components/Login/Others/viewCategory";
import Cart from '../components/cart/user/Cart'

import MainConsumer from "../components/Industries/Consumer/mainConsumer";

import MainContact from '../components/contact/ContactPageAcademy/mainContact';
 
// import MainAcademy from '../components/acadamy/mainAcademy';
// import MainConsortium from '../components/consortium/mainConsortium';
// import MainAutomative from '../components/Industries/Automotive/mainAutomative';
// import MainTravel from '../components/Industries/Travel/mainTravel';
// import MainCommunication from '../components/Industries/Communication/mainCommunication';
// import MainLifescience from '../components/Industries/Lifescience/mainLifescience';
// import MainBanking from '../components/Industries/Banking/mainBanking';
// import MainArtificial from '../components/Insight/Artificial/mainArtificial';
// import MainBlockchain from '../components/Insight/Blockchain/mainBlockchain';
// import MainIoT from '../components/Insight/IoT/mainIoT';
// import MainCloudcomputing from '../components/Insight/Cloudcomputing/mainCloudcomputing';
// import MainDatascience from '../components/Insight/Datascience/mainDatascience';
// import MainFutureworkforce from '../components/Insight/Futureworkforce/mainFutureworkforce';
// import MainApplication from '../components/Business/Application/mainApplication';
// import MainConsulting from '../components/Business/Consulting/mainConsulting';
// import MainDigital from '../components/Business/Digital/mainDigital';
// import MainOperations from '../components/Business/Operations/mainOperations';
// import MainStrategy from '../components/Business/Strategy/mainStrategy';
// import MainTechnology from '../components/Business/Technology/mainTechnology';
// import MainAdvJava from '../components/Courses/FullStack/AdvJava/mainAdvjava';
// import MainCoreJava from '../components/Courses/FullStack/CoreJava/mainCorejava';
// import MainFSNet from '../components/Courses/FullStack/FSNet/mainFSnet';
// import MainFSRuby from '../components/Courses/FullStack/FSRuby/mainFSruby';
// import MainGolang from '../components/Courses/FullStack/Golang/maingolang';
// import MainMean from '../components/Courses/FullStack/MEAN/mainmean';
// import MainMeasn from '../components/Courses/FullStack/MEASN/mainmeasn';
// import MainMEVN from '../components/Courses/FullStack/MEVN/mainmEVN';
// import MainAngular from '../components/Courses/UICourses/Angular/mainAng';
// import MainCoreUI from '../components/Courses/UICourses/CoreUI/mainCoreUi';
// import MainReact from '../components/Courses/UICourses/React/mainreact';
// import MainVue from '../components/Courses/UICourses/Vue/mainvue';
// import MainUI from '../components/Courses/UICourses/UIMain/mainui';
// import MainAdvUI from '../components/Courses/UICourses/AdvancedUI/mainAdvui';
// import MainNetCore from '../components/Courses/Backend/NetCore/mainNetcore';
// import MainFlutter from '../components/Courses/Mobility/Flutter/mainflutter';
// import MainIonic from '../components/Courses/Mobility/Ionic/mainIon';
// import MainReactNative from '../components/Courses/Mobility/React Native/mainReactnative';
// import MainXamarin from '../components/Courses/Mobility/Xamarin/mainxamarin';
// import MainOnsenUI from '../components/Courses/Mobility/OnsenUI/mainOnsenUi';
// import MainIOS from '../components/Courses/Mobility/ios/mainIos';
// import MainAndroid from '../components/Courses/Mobility/Android/mainAndr';
// import MainPMP from '../components/Courses/ITCertifications/PMP/mainPmp';
// import MainAgile from '../components/Courses/ITCertifications/Agile/mainAgi';
// import MainPrince2 from '../components/Courses/ITCertifications/Prince2/mainprince2';
// import MainPMIACP from '../components/Courses/ITCertifications/PMIACP/mainPmiacp';
// import MainITIL from '../components/Courses/ITCertifications/ITIL/mainItil';
// import MainSalesForce from '../components/Courses/ITCources/SalesForce/mainSalesforce';
// import MainServiceNow from '../components/Courses/ITCources/ServiceNow/mainServicenow';
// import MainRemedy from '../components/Courses/ITCources/Remedy/mainremedy';
// import MainMicroDyn from '../components/Courses/ITCources/MicrosoftDynamics/mainMicrosoftDyn';
// import MainSAP from '../components/Courses/ERP/SAP/mainSap';
// import MainOracle from '../components/Courses/ERP/Oracle/mainoracle';
// import MainInforln from '../components/Courses/ERP/Inforln/mainInforin';
// import MainRootstack from '../components/Courses/ERP/Rootstack/mainrootstack';
// import MainManualTesting from '../components/Courses/FunctionalTesting/ManualTesting/mainManualTest';
// import MainAutomationTesting from '../components/Courses/FunctionalTesting/AutomationTesting/mainAutomationTest';
// import MainCloudTesting from '../components/Courses/FunctionalTesting/CloudTesting/mainCloudTest';
// import MainFullStackTesting from '../components/Courses/FunctionalTesting/FullStackTesting/mainFullStackTest';
// //import MainAll from '../components/courses/coursespage/AllCourses/mainAll';
// import MainCissp from '../components/Courses/Cyber/cissp/maincissp';
// import Mainccsp from '../components/Courses/Cyber/Ccsp/mainccsp';
// import MainCeh from '../components/Courses/Cyber/Ceh/mainceh';
// import MainCisa from '../components/Courses/Cyber/Cisa/maincisa';
// import MainCism from '../components/Courses/Cyber/Cism/maincism';
// import MainCompita from '../components/Courses/Cyber/CompitaSecurity/mainCompitasecurity';
// import MainAnsible from '../components/Courses/DevOps/Ansible/mainAns';
// import MainDevOps from '../components/Courses/DevOps/DevOpsMain/mainDevops';
// import MainDockers from '../components/Courses/DevOps/Dockers/maindockers';
// import MainKubernets from '../components/Courses/DevOps/Kubernets/mainKub';
// import MainCHEF from '../components/Courses/DevOps/CHEF/mainChef';
 //import MainContact from '../components/contact/ContactPageAcademy/mainContact';
// import MainDigitalMar from '../components/Courses/Digital Marketing/DigitalMain/mainDigiMar';
// import MainFoundationDM from '../components/Courses/Digital Marketing/DMFoundation/mainFounda';
// import MainExpertMar from '../components/Courses/Digital Marketing/DMExpert/mainExpMark';
// import MainSOE from '../components/Courses/Digital Marketing/SEO/mainSoe';
// import MainSMO from '../components/Courses/Digital Marketing/SMO/mainSmo';
// import MainSCM from '../components/Courses/Digital Marketing/SCM/mainScm';
// import MainSMM from '../components/Courses/Digital Marketing/SMM/mainSmm';
// import MainAdwordsFoundation from '../components/Courses/Digital Marketing/AdwordsFoundation/mainAdwordsFound';
// import MainAdwordsExpert from '../components/Courses/Digital Marketing/AdwordsExpert/mainAdwordsExp';
// import MainContentMarketing from '../components/Courses/Digital Marketing/ContentMarketing/mainContentMark';
// import MainBranding from '../components/Courses/Digital Marketing/Branding/mainBrand';
// import TechEssential from '../components/Courses/CloudCourses/AWSTechnicalEssentials/mainAWSTechEss';
// import MainMAzureFunda from '../components/Courses/CloudCourses/MAzureFundamentals/mainMAzureFund';
// import MainAWSDevAssociate from '../components/Courses/CloudCourses/AWSDevAssociate/mainAWSDevAsso';
// import MainSysOps from '../components/Courses/CloudCourses/AWSSysOps/mainAWSSysOp';
// import MainAWSSol from '../components/Courses/CloudCourses/AWSSolArch/mainAWSSo';
// import MainAWSPract from '../components/Courses/CloudCourses/AWSCloudPract/mainAWS';
// import MAzureExp from '../components/Courses/CloudCourses/MAzureExpert/mainMazureExp';
// import MainDataScience from '../components/Courses/DataScience/DataScienceMain/mainDataScien';
// import MainDSBootcamp from '../components/Courses/DataScience/DSBootcamp/mainDsBootcamp';
// import MainMLPython from '../components/Courses/DataScience/MLPython/mainMLPyth';
// import MainDeepLearning from '../components/Courses/DataScience/DeepLearning/mainDeeplearning';
// import MainDataAnalytics from '../components/Courses/DataScience/DataAnalytics/mainDataAnaly';
// import MainDataScientistCertification from '../components/Courses/DataScience/DataScientistCertification/mainDsc';
// import MainNaturalLanguageProcessing from '../components/Courses/DataScience/NaturalLanguageProcessing/mainNaturalLanguageProcess';
// import MainRProgramming from '../components/Courses/DataScience/RProgramming/mainRProgram';
// import MainAIMLFoundation from '../components/Courses/DataScience/AIMLFoundation/mainAIMLFound';
// import MainAIMLExpert from '../components/Courses/DataScience/AIMLExpert/mainAIMLExp';
// import MainHadoop from '../components/Courses/DataScience/Hadoop/mainhadoop';
// import MainCloud from '../components/Courses/CloudCourses/CloudsMain/maincloud';
// import MainHome from '../components/Home/mainHome';
// import MainJava from '../components/Courses/Backend/Java/Mainjava';
// import MainNet from '../components/Courses/Backend/Net/MainNet';
// import MainNode from '../components/Courses/Backend/Node/MainNode';
// import MainPython from '../components/Courses/Backend/Python/mainPy';
// import MainRuby from '../components/Courses/Backend/Ruby/MainRuby';
// import MainBackend from '../components/Courses/Backend/BackendMain/mainBackEnd';
// import MainComingSoon from '../components/products/ComingSoon/MainComingSoon';
// import MainAbout from '../components/About/mainAbout';
// import MainFT from '../components/Courses/FunctionalTesting/FTMain/mainFt';
// import MainFS from '../components/Courses/FullStack/MainFS/mainFs';
// import MainFoundation from '../components/Courses/DevOps/Foundation/mainFound';
// import MainExpert from '../components/Courses/DevOps/Expert/mainexpert';
// import MainOpenStack from '../components/Courses/DevOps/OpenStack/mainOpenstack';

import StudentCoursePage from "../components/CoursePage/Student/StudentCoursePage";
import InstructorCoursePage from "../components/CoursePage/Instructor/InstructorCoursePage";
import AdminCoursePage from "../components/CoursePage/Admin/AdminCoursePage";
import NewUserCoursePage from "../components/CoursePage/NewUser/NewUserCoursePage";
import { ViewCourse } from "../components/Login/Others/viewCourse";
import TestLogin from "../components/Test/testLogin";
import Test from "../components/Test/test";
import QuestionBank from "../components/Login/Others/questionBank";
import SkillAssessment from "../components/Login/Others/TestAssessment/SkillTest";
import CourseAssessment from "../components/Login/Others/courseAssessment";
import TestDashboard from "../components/Login/Others/TestDashboard";

export default class Application extends Component {
  static contextType=userContext;
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      user: "admin",
      courses: [],
    };
  }

  componentDidUpdate(pP,pS,SS){
    if(pS.user!=this.context.user.type){
      if(this.context.user.type){
        this.setState({user:this.context.user.type});
      }
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3004/api/courses").then((res) => {
      console.log("hiiiiiii")
      console.log(res.data);
      if (res.data) {
        this.setState({ courses: res.data.courses });
      } else {
        console.log("error");
      }
      // localStorage.removeItem("admin");
      // localStorage.removeItem("user");
      // localStorage.removeItem("instructor");
    });
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/index" component={Itservices} />
        <Route exact path="/apply" component={Apply} />
        <Route path="/caramelit_new/program" component={MainProgram} />
        <Route exact path="/recommendations" component={Recommendations} />
        <Route
          exact
          path="/caramelit_new/courses/uicourses"
          component={MainFrontend}
        />
        <Route
          exact
          path="/caramelit_new/courses/backend"
          component={MainBackEnd}
        />
        <Route
          exact
          path="/caramelit_new/courses/functionaltesting"
          component={MainFt}
        />
        <Route
          exact
          path="/caramelit_new/courses/fullstack"
          component={MainFullstack}
        />
        <Route
          exact
          path="/caramelit_new/courses/mobility"
          component={MainMobility}
        />
        <Route
          exact
          path="/caramelit_new/courses/devops"
          component={MainDevops}
        />
        <Route
          exact
          path="/caramelit_new/courses/datascience"
          component={MainDataSci}
        />
        <Route
          exact
          path="/caramelit_new/courses/cloud"
          component={MainCloudComputing}
        />
        <Route
          exact
          path="/caramelit_new/courses/cyber"
          component={MainCyber}
        />
        <Route
          exact
          path="/caramelit_new/courses/digital"
          component={MainDigMar}
        />
        <Route exact path="/caramelit_new/courses/erp" component={MainERP} />
        <Route exact path="/caramelit_new/courses/it" component={MainIT} />
        <Route
          exact
          path="/caramelit_new/courses/itcertification"
          component={MainItCertification}
        />

        <Route
          exact
          path="/lms/student/login"
          //  component={SignIn}
          component={() => <SignIn islogged={this.state.user} />}
        />
        <Route exact path="/lms/student/register" component={SignUp} />
        <Route exact path="/lms/student/forgot-password" component={ForgotPass} />
        <Route exact path="/lms/university/university_login" component={SignInCollege} />
        <Route
          exact
          path="/lms/instructor/instructor_login"
          // component={SignIn2}
          component={() => <SignIn2 islogged={this.state.islogged} />}
        />
        <Route
          exact
          path="/lms/organisation/organisation_login"
          component={SignIn3}
        />
        <Route
          exact
          path="/lms/admin/admin_login"
          render={() => (
            <div>
              <BackGround>
                <SignIn4 />
              </BackGround>
            </div>
          )}
        />
        <Route exact path="/lms/user/login" component={UserSignIn} />
        <Route exact path="/lms/user/register" component={UserSignUp} />
        <Route exact path="/lms/user/dashboard" component={UserDashboard} />
        <Route exact path="/lms/user/forgot-password" component={UserForgotPass} />
        <Route exact path="/lms/college/register" component={SignUpCollege} />
        <Route exact path="/lms/instructor/register" component={SignUp2} />
        <Route exact path="/lms/admin/register" component={AdminSignup} />
        <Route exact path="/lms/organisation/register" component={SignUp3} />
        <Route exact path="/lms/student/dashboard" component={StudentDashboard} />
        <Route
          exact
          path="/lms/admin/dashboard/questionBank"
          component={QuestionBank}
        />
        <Route
          exact
          path="/lms/admin/dashboard/skilltest"
          component={SkillAssessment}
        />
        <Route
          exact
          path="/lms/admin/dashboard/coursetest"
          component={CourseAssessment}
        />
        <Route exact path="/testLogin" component={TestLogin} />
        <Route exact path="/test" component={Test} />

        <Route
          exact
          path="/lms/instructor/dashboard"
          component={InstructorDashboard}
        />
        <Route
          exact
          path="/lms/college/dashboard"
          component={CollegeDashboard}
        />
        <Route
          exact
          path="/lms/organisation/dashboard"
          component={OrganisationDashboard}
        />

        <Route
          exact
          path="/lms/user/cart"
          component={Cart}
        />

        <Route exact path="/lms/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/lms/admin/testDashboard" component={TestDashboard} />
        <Route path="/lms/admin/skillAssessment" component={SkillAssessment} />
        <Route exact path="/lms/admin/viewcourse" component={ViewCourse} />
        <Route exact path="/lms/admin/addcourse" component={AddCourse} />
        <Route exact path="/lms/admin/viewcategory" component={ViewCategory} />
        {/* <Route exact path='/' component={Dashboard} /> */}
        <Route exact path="/lms/admin/addcategory" component={AddCategory} />

        {this.state.user === "user" &&
          this.state.courses.map((course, i) => (
            <Route
              exact
              path={
                "/caramelit_new/courses/coursespage/" +
                course.title.toLowerCase().split(" ").join("")
              }
              // component={StudentCoursePage}
              component={() => <StudentCoursePage course={course} />}
            />
          ))}

        {this.state.user === "instructor" &&
          this.state.courses.map((course, i) => (
            <Route
              exact
              path={
                "/caramelit_new/courses/coursespage/" +
                course.title.toLowerCase().split(" ").join("")
              }
              // component={StudentCoursePage}
              component={() => <InstructorCoursePage course={course} />}
            />
          ))}

        {this.state.user === "admin" &&
          this.state.courses.map((course, i) => (
            <Route
              exact
              path={
                "/caramelit_new/courses/coursespage/" +
                course.title.toLowerCase().split(" ").join("")
              }
              // component={StudentCoursePage}
              component={() => <AdminCoursePage course={course} />}
            />
          ))}

        {this.state.user === "newuser" &&
          this.state.courses.map((course, i) => (
            <Route
              exact
              path={
                "/caramelit_new/courses/coursespage/" +
                course.title.toLowerCase().split(" ").join("")
              }
              // component={StudentCoursePage}
              component={() => <NewUserCoursePage course={course} />}
            />
          ))}

          <Route path="/nodecontactform/acadamycontact" component={MainContact} />

        {/* <Route path="/consortium" component={MainConsortium} />
                <Route path="/industries/automotive" component={MainAutomative} />
                <Route path="/industries/communication" component={MainCommunication} />
                <Route path="/industries/lifescience" component={MainLifescience} />
                <Route path="/industries/banking" component={MainBanking} />
                <Route path="/industries/consumer" component={MainConsumer} />
                <Route path="/industries/travel" component={MainTravel} />
                <Route path="/insights/artificial" component={MainArtificial} />
                <Route path="/insights/blockchain" component={MainBlockchain} />
                <Route path="/insights/iot" component={MainIoT} />
                <Route path="/insights/cloudcomputing" component={MainCloudcomputing} />
                <Route path="/insights/datascience" component={MainDatascience} />
                <Route path="/insights/futureworkforce" component={MainFutureworkforce} />
                <Route path="/business/Application" component={MainApplication} />
                <Route path="/business/consulting" component={MainConsulting} />
                <Route path="/business/digital" component={MainDigital} />
                <Route path="/business/operations" component={MainOperations} />
                <Route path="/business/strategy" component={MainStrategy} />
                <Route path="/business/technology" component={MainTechnology} />
                <Route path="/caramelit_new/courses/coursespage/page/advancejava" component={MainAdvJava} />
                <Route path="/caramelit_new/courses/coursespage/corejava" component={MainCoreJava} />
                <Route path="/caramelit_new/courses/coursespage/fullstack.net" component={MainFSNet} />
                <Route path="/caramelit_new/courses/coursespage/rubyfullstack" component={MainFSRuby} />
                <Route path="/caramelit_new/courses/coursespage/golang" component={MainGolang} />
                <Route path="/caramelit_new/courses/coursespage/mean" component={MainMean} />
                <Route path="/caramelit_new/courses/coursespage/measn" component={MainMeasn} />
                <Route path="/caramelit_new/courses/coursespage/mevn" component={MainMEVN} />
                <Route path="/caramelit_new/courses/coursespage/advancedui" component={MainAdvUI} />
                <Route path="/caramelit_new/courses/coursespage/angularjs" component={MainAngular} />
                <Route path="/caramelit_new/courses/coursespage/coreui" component={MainCoreUI} />
                <Route path="/caramelit_new/courses/coursespage/reactjs" component={MainReact} />
                <Route path="/caramelit_new/courses/coursespage/vuejs" component={MainVue} />
                <Route path="/caramelit_new/courses/coursespage//uicourses" component={MainUI} />
                <Route path="/caramelit_new/courses/coursespage/flutter" component={MainFlutter} />
                <Route path="/caramelit_new/courses/coursespage/ionic" component={MainIonic} />
                <Route path="/caramelit_new/courses/coursespage/reactnative" component={MainReactNative} />
                <Route path="/caramelit_new/courses/coursespage/xamarin" component={MainXamarin} />
                <Route path="/caramelit_new/courses/coursespage/onsenui" component={MainOnsenUI} />
                <Route path="/caramelit_new/courses/coursespage/ios" component={MainIOS} />
                <Route path="/caramelit_new/courses/coursespage/android" component={MainAndroid} />
                <Route path="/caramelit_new/courses/coursespage/.netcore" component={MainNetCore} />
                <Route path="/caramelit_new/courses/coursespage/pmp" component={MainPMP} />
                <Route path="/caramelit_new/courses/coursespage/agile" component={MainAgile} />
                <Route path="/caramelit_new/courses/coursespage/prince" component={MainPrince2} />
                <Route path="/caramelit_new/courses/coursespage/pmiacp" component={MainPMIACP} />
                <Route path="/caramelit_new/courses/coursespage/itil" component={MainITIL} />
                <Route path="/caramelit_new/courses/coursespage/salesforce" component={MainSalesForce} />
                <Route path="/caramelit_new/courses/coursespage/servicenow" component={MainServiceNow} />
                <Route path="/caramelit_new/courses/coursespage/remedy" component={MainRemedy} />
                <Route path="/caramelit_new/courses/coursespage/microsoftdynamics" component={MainMicroDyn} />
                <Route path="/caramelit_new/courses/coursespage/sap" component={MainSAP} />
                <Route path="/caramelit_new/courses/coursespage/oracle" component={MainOracle} />
                <Route path="/caramelit_new/courses/coursespage/inforln" component={MainInforln} />
                <Route path="/caramelit_new/courses/coursespage/manualtesting" component={MainManualTesting} />
                <Route path="/caramelit_new/courses/coursespage/rootstack" component={MainRootstack} />
                <Route path="/caramelit_new/courses/coursespage/automation" component={MainAutomationTesting} />
                <Route path="/caramelit_new/courses/coursespage/cloudtesting" component={MainCloudTesting} />
                <Route path="/caramelit_new/courses/coursespage/fullstacktesting" component={MainFullStackTesting} />
                <Route path="/caramelit_new/courses/coursespage/cissp" component={MainCissp} />
                <Route path="/caramelit_new/courses/coursespage/ccsp" component={Mainccsp} />
                <Route path="/caramelit_new/courses/coursespage/ceh" component={MainCeh} />
                <Route path="/caramelit_new/courses/coursespage/cisa" component={MainCisa} />
                <Route path="/caramelit_new/courses/coursespage/comptiasecurity++" component={MainCompita} />
                <Route path="/caramelit_new/courses/coursespage/ansible" component={MainAnsible} />
                <Route path="/caramelit_new/courses/coursespage/docker" component={MainDockers} />
                <Route path="/caramelit_new/courses/coursespage//devops" component={MainDevOps} />
                <Route path="/caramelit_new/courses/coursespage/kubernets" component={MainKubernets} />
                <Route path="/caramelit_new/courses/coursespage/chef" component={MainCHEF} />
                <Route path="/caramelit_new/courses/coursespage//digital" component={MainDigitalMar} />
                <Route path="/caramelit_new/courses/coursespage/digitalmarketingfoundation" component={MainFoundationDM} />
                <Route path="/caramelit_new/courses/coursespage/digitalmarketingexpert" component={MainExpertMar} />
                <Route path="/caramelit_new/courses/coursespage/seo" component={MainSOE} />
                <Route path="/caramelit_new/courses/coursespage/smo" component={MainSMO} />
                <Route path="/caramelit_new/courses/coursespage/scm" component={MainSCM} />
                <Route path="/caramelit_new/courses/coursespage/smm" component={MainSMM} />
                <Route path="/caramelit_new/courses/coursespage/adwordsfoundation" component={MainAdwordsFoundation} />
                <Route path="/caramelit_new/courses/coursespage/adwordsexpert" component={MainAdwordsExpert} />
                <Route path="/caramelit_new/courses/coursespage/contentmarketing" component={MainContentMarketing} />
                <Route path="/caramelit_new/courses/coursespage/branding" component={MainBranding} />
                <Route path="/caramelit_new/courses/coursespage/awstechnicalessentials" component={TechEssential} />
                <Route path="/caramelit_new/courses/coursespage//cloud" component={MainCloud} />
                <Route path="/caramelit_new/courses/coursespage/microsoftazurefundamentals" component={MainMAzureFunda} />
                <Route path="/caramelit_new/courses/coursespage/awsdeveloperassociate" component={MainAWSDevAssociate} />
                <Route path="/caramelit_new/courses/coursespage/awssysopsassociateadministrator" component={MainSysOps} />
                <Route path="/caramelit_new/courses/coursespage/awssolutionarchitectassociate" component={MainAWSSol} />
                <Route path="/caramelit_new/courses/coursespage/awscloudpractitioner" component={MainAWSPract} />
                <Route path="/caramelit_new/courses/coursespage/microsoftazureexpertcertification" component={MAzureExp} />
                <Route path="/caramelit_new/courses/coursespage//datascience" component={MainDataScience} />
                <Route path="/caramelit_new/courses/coursespage/dsbootcamp" component={MainDSBootcamp} />
                <Route path="/caramelit_new/courses/coursespage/mlwithpython" component={MainMLPython} />
                <Route path="/caramelit_new/courses/coursespage/deeplearning" component={MainDeepLearning} />
                <Route path="/caramelit_new/courses/coursespage/dataanalytics" component={MainDataAnalytics} />
                <Route path="/caramelit_new/courses/coursespage/datascientistcertification" component={MainDataScientistCertification} />
                <Route path="/caramelit_new/courses/coursespage/naturallanguageprocessing" component={MainNaturalLanguageProcessing} />
                <Route path="/caramelit_new/courses/coursespage/rprogramming" component={MainRProgramming} />
                <Route path="/caramelit_new/courses/coursespage/aimlfoundationcourse" component={MainAIMLFoundation} />
                <Route path="/caramelit_new/courses/coursespage/aimlexpertcourse" component={MainAIMLExpert} />
                <Route path="/caramelit_new/courses/coursespage/hadoop" component={MainHadoop} />
                <Route path="/caramelit_new/courses/coursespage/backend" component={MainBackend} />
                <Route path="/caramelit_new/courses/coursespage/java" component={MainJava} />
                <Route path="/caramelit_new/courses/coursespage/python" component={MainPython} />
                <Route path="/caramelit_new/courses/coursespage/.net" component={MainNet} />
                <Route path="/caramelit_new/courses/coursespage/ruby" component={MainRuby} />
                <Route path="/caramelit_new/courses/coursespage/nodejs" component={MainNode} />
                <Route path="/aboutus" component={MainAbout} />
                <Route path="/index" component={MainHome} />
                <Route path="/caramelit_new/courses/coursespage//fullstack" component={MainFS} />
                {/* <Route path="/coursedetails" component={MainAll} /> */}
        {/*<Route path="/acadamy" component={MainAcademy} />
                 <Route path="/contact" component={Contact} />
                <Route path="/contacts" component={ContactList} /> */}
        {/* <Route path="/caramelit_new/courses/coursespage//functionaltesting" component={MainFT} />
                <Route path="/caramelit_new/courses/coursespage/devopsfoundation" component={MainFoundation} />
                <Route path="/caramelit_new/courses/coursespage/devopsexpert" component={MainExpert} />
                <Route path="/caramelit_new/courses/coursespage//functionaltesting" component={MainOpenStack} />
                <Route path="/caramelit_new/courses/coursespage/openstack" component={MainOpenStack} />
                <Route path="/caramelit_new/courses/coursespage/naturallanguageprocessing" component={MainNaturalLanguageProcessing } />
                <Route path="/caramelit_new/courses/coursespage/cism" component={MainCism} />
                <Route path="/products" component={MainComingSoon} />
                <Route path="/corporate" component={MainComingSoon} />
                <Route path="/university" component={MainComingSoon} /> */}

        {/* <Route path="/coursedetails.html" component={MainAll} /> */}

        {/* </div> */}
      </Router>
    );
  }
}
