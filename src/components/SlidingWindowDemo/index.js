import dynamic from "next/dynamic";

//Lazy loading the component whenever its imported
const SlidingWindowDemo = dynamic(() => import("./SlidingWindowDemo"));

export default SlidingWindowDemo;
