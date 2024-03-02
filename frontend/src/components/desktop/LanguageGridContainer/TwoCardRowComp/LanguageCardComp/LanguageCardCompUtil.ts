import javaVectorIcon from '../../../../../assets/progicons/javaicon.svg';
import javaScriptVectorIcon from '../../../../../assets/progicons/jsicon.svg';
import pythonVectorIcon from '../../../../../assets/progicons/pythonicon.svg';
import cPlusPlusVectorIcon from '../../../../../assets/progicons/cplusplusicon.svg';

export const determineProgLangPath = (cardTitle: string) => {
  switch (cardTitle) {
    case 'JavaScript':
      return javaScriptVectorIcon;
    case 'Java':
      return javaVectorIcon;
    case 'C++':
      return cPlusPlusVectorIcon;
    case 'Python':
      return pythonVectorIcon;
    default:
      return javaScriptVectorIcon;
  }
};
