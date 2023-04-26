import { Accordion, AccordionTab } from 'primereact/accordion';
import StringFunctions from '../Functions/String';

export const StringSolutions = () => {
     
  const input = '<div>sdfsdfsdf<div><p><asdasdasd>asdasdasd<div>sdfsdf<div>'
  const result = StringFunctions.closeSecondDiv(input)

  return (
    <Accordion activeIndex={0}>
        <AccordionTab header="Remove Duplicates from Sorted Array" style={{textAlign:'left'}}>
            {result}
        </AccordionTab>
    </Accordion>
  );
}

export default StringSolutions;


