import { Routes } from '@angular/router';
import { HomePage } from './component/home-page/home-page';
import { TnusrbPoliceConstable } from './component/tnusrb-police-constable/tnusrb-police-constable';
import { TnusrbSubInspector } from './component/tnusrb-sub-inspector/tnusrb-sub-inspector';
import { TnusrbSubInspectorFingerPrint } from './component/tnusrb-sub-inspector-finger-print/tnusrb-sub-inspector-finger-print';
import { TnusrbSubInspectorTechnical } from './component/tnusrb-sub-inspector-technical/tnusrb-sub-inspector-technical';
import { TnusrbWatcher } from './component/tnusrb-watcher/tnusrb-watcher';
import { TnusrbForester } from './component/tnusrb-forester/tnusrb-forester';
import { NDAExam } from './component/nda-exam/nda-exam';
import { CDSExam } from './component/cds-exam/cds-exam';
import { AmryGeneralDuty } from './component/amry-general-duty/amry-general-duty';
import { AmryTradesman } from './component/amry-tradesman/amry-tradesman';
import { AmryNursingAssistant } from './component/amry-nursing-assistant/amry-nursing-assistant';
import { ArmySoldierClerk } from './component/army-soldier-clerk/army-soldier-clerk';
import { ArmyTechnical } from './component/army-technical/army-technical';
import { NavyMr } from './component/navy-mr/navy-mr';
import { NavyTechnicalSSR } from './component/navy-technical-ssr/navy-technical-ssr';
import { NavyTechnicalAA } from './component/navy-technical-aa/navy-technical-aa';
import { IndianCoastGaurd } from './component/indian-coast-gaurd/indian-coast-gaurd';
import { IndianCoastGaurdNavikDb } from './component/indian-coast-gaurd-navik-db/indian-coast-gaurd-navik-db';
import { IndianCoastGaurdNavikGd } from './component/indian-coast-gaurd-navik-gd/indian-coast-gaurd-navik-gd';
import { IndianAirForceGroupX } from './component/indian-air-force-group-x/indian-air-force-group-x';
import { IndianAirForceGroupXY } from './component/indian-air-force-group-x-y/indian-air-force-group-x-y';
import { IndianAirForceGroupY } from './component/indian-air-force-group-y/indian-air-force-group-y';
import { RPFSubInspector } from './component/rpf-sub-inspector/rpf-sub-inspector';
import { RPFPolicConstable } from './component/rpf-polic-constable/rpf-polic-constable';
import { BsfTradesman } from './component/bsf-tradesman/bsf-tradesman';
import { BsfGd } from './component/bsf-gd/bsf-gd';
import { CRPFConstableGd } from './component/crpf-constable-gd/crpf-constable-gd';
import { CRPFTradesman } from './component/crpf-tradesman/crpf-tradesman';
import { SSCMTS } from './component/ssc-mts/ssc-mts';
import { SSCGD } from './component/ssc-gd/ssc-gd';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { TnusrbGuard } from './component/tnusrb-guard/tnusrb-guard';
import { Contact } from './component/contact/contact';
import { Eligibity } from './component/eligibity/eligibity';
import { RegisterForm } from './component/register-form/register-form';
import { Thankyou } from './thankyou/thankyou';
import { Chatbot } from './chatbot/chatbot';


export const routes: Routes = [
    {path:'home', component:HomePage},
    {path:'tnusrb-police-constable', component:TnusrbPoliceConstable},
    {path:'tnusrb-sub-inspector', component:TnusrbSubInspector},
    {path:'tnusrb-sub-inspector-finger-print',component:TnusrbSubInspectorFingerPrint},
    {path:'tnusrb-sub-inspector-technical',component:TnusrbSubInspectorTechnical},
    {path:'tnusrb-watcher',component:TnusrbWatcher},
    {path:'tnusrb-guard',component:TnusrbGuard},
    {path:'tnusrb-forester',component:TnusrbForester},
    {path:'NDA-Exam', component:NDAExam},
    {path:'CDS-Exam',component:CDSExam},
    {path:'army-general-duty', component:AmryGeneralDuty},
    {path:'army-tradesman', component:AmryTradesman},
    {path:'army-nursing-assistant', component:AmryNursingAssistant},
    {path:'army-soldier-clerk',component:ArmySoldierClerk},
    {path:'army-technical',component:ArmyTechnical},
    {path:'navy-mr', component:NavyMr},
    {path:'navy-technical-ssr' ,component:NavyTechnicalSSR},
    {path:'navy-technical-aa' ,component:NavyTechnicalAA},
    {path:'indian-coast-guard' ,component:IndianCoastGaurd},
    {path:'indian-coast-guard-navik-gd', component:IndianCoastGaurdNavikGd},
    {path:'indian-coast-guard-navik-db', component:IndianCoastGaurdNavikDb},
    {path:'indian-air-force-group-x-y',component:IndianAirForceGroupXY},
    {path:'indian-air-force-group-x',component:IndianAirForceGroupX},
    {path:'indian-air-force-group-y',component:IndianAirForceGroupY},
    {path:'rpf-sub-inspector', component:RPFSubInspector},
    {path:'rpf-police-constable', component:RPFPolicConstable},
    {path:'bsf-tradesman', component:BsfTradesman},
    {path:'bsf-gd', component:BsfGd},
    {path:'crpf-constable-gd', component:CRPFConstableGd},
    {path:'crpf-tradesman', component:CRPFTradesman},
    {path:'ssc-mts', component:SSCMTS},
    {path:'ssc-gd', component:SSCGD},
    {path:'header', component:Header},
    {path:'footer',component:Footer},
    {path:'contact',component:Contact},
    {path:'eligible', component:Eligibity},
    {path:'register-form',component:RegisterForm},
    {path:"thank-you", component:Thankyou},
    {path:'chatbot', component: Chatbot},
    {path: '', redirectTo: 'home', pathMatch: 'full' }
];
