import dynamic from "next/dynamic";

//Lazy loading the component whenever its imported
const DivisonsGroupDemo = dynamic(() => import("./DivisionGroupsDemo"));

export default DivisonsGroupDemo;
