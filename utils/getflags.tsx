import argentina from 'flags/argentina';
import australia from 'flags/australia';
import belgium from 'flags/belgium';
import brazil from 'flags/brazil';
import cameroon from 'flags/cameroon';
import canada from 'flags/canada';
import costarica from 'flags/costarica';
import croatia from 'flags/croatia';
import denmark from 'flags/denmark';
import ecuador from 'flags/ecuador';
import england from 'flags/england';
import france from 'flags/france';
import germany from 'flags/germany';
import ghana from 'flags/ghana';
import iran from 'flags/iran';
import japan from 'flags/japan';
import korearepublic from 'flags/korearepublic';
import mexico from 'flags/mexico';
import morocco from 'flags/morocco';
import netherlands from 'flags/netherlands';
import poland from 'flags/poland';
import portugal from 'flags/portugal';
import qatar from 'flags/qatar';
import saudiarabia from 'flags/saudiarabia';
import senegal from 'flags/senegal';
import serbia from 'flags/serbia';
import spain from 'flags/spain';
import switzerland from 'flags/switzerland';
import tunisia from 'flags/tunisia';
import uruguay from 'flags/uruguay';
import usa from 'flags/usa';
import wales from 'flags/wales';

const flagsMap = new Map<string, JSX.Element>([
  ['argentina', argentina],
  ['australia', australia],
  ['belgium', belgium],
  ['brazil', brazil],
  ['cameroon', cameroon],
  ['canada', canada],
  ['costa rica', costarica],
  ['croatia', croatia],
  ['denmark', denmark],
  ['ecuador', ecuador],
  ['england', england],
  ['france', france],
  ['germany', germany],
  ['ghana', ghana],
  ['iran', iran],
  ['japan', japan],
  ['korea republic', korearepublic],
  ['mexico', mexico],
  ['morocco', morocco],
  ['netherlands', netherlands],
  ['poland', poland],
  ['portugal', portugal],
  ['qatar', qatar],
  ['saudi arabia', saudiarabia],
  ['senegal', senegal],
  ['serbia', serbia],
  ['spain', spain],
  ['switzerland', switzerland],
  ['tunisia', tunisia],
  ['uruguay', uruguay],
  ['usa', usa],
  ['wales', wales],
]);

export function getFlag(team: string) {
  const key = team.toLowerCase();
  return flagsMap.get(key);
}
