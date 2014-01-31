/*
 * Jargone
 * 
 * Highlight jargon on the page. Jargon, begone.
 * Roo Reynolds | rooreynolds.com | @rooreynolds
 * 
 * [NB: jargone.js is built using build.sh. Expect changes here to be overwritten]
 */

javascript:(function () { 

    // list of words to avoid based on https://www.gov.uk/designprinciples/styleguide#item_4_1_3
    var words = [
            ['advancing',"www.gov.uk/design-principles/style-guide"],
            ['agenda', "Unless it's for a meeting - www.gov.uk/design-principles/style-guide"],
            ['approximately', "Consider 'about' - www.gov.uk/design-principles/style-guide"],
            ['assist', "Consider 'help' - www.gov.uk/design-principles/style-guide"],
            ['assisted', "Consider 'helped' - www.gov.uk/design-principles/style-guide"],
            ['assisting', "Consider 'helping' - www.gov.uk/design-principles/style-guide"],
            ['being done', "Use the active voice. 'We are doing this'"],
            ['collaborate', "Use 'working with' - www.gov.uk/design-principles/style-guide"],
            ['collaborated', "Use 'worked with' - www.gov.uk/design-principles/style-guide"],
            ['collaborating', "Use 'working with' - www.gov.uk/design-principles/style-guide"],
            ['combating',"www.gov.uk/design-principles/style-guide"],
            ['committing',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['commit',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['countering',"www.gov.uk/design-principles/style-guide"],
            ['deliver', "Pizzas, post and services are delivered – not abstract concepts like 'improvements' or 'priorities' - www.gov.uk/design-principles/style-guide"],
            ['deploy',"unless it's military or software - www.gov.uk/design-principles/style-guide"],
            ['dialogue', "We speak to people - www.gov.uk/design-principles/style-guide"],
            ['disincentivised',"www.gov.uk/design-principles/style-guide"],
            ['disincentivise',"www.gov.uk/design-principles/style-guide"],
            ['disincentivising',"www.gov.uk/design-principles/style-guide"],
            ['drive out', "Unless it is cattle - www.gov.uk/design-principles/style-guide"],
            ['driven out', "Unless it is cattle - www.gov.uk/design-principles/style-guide"],
            ['driving out', "Unless it is cattle - www.gov.uk/design-principles/style-guide"],
            ['drive',"You can only drive vehicles; not schemes or people - www.gov.uk/design-principles/style-guide"],
            ['empower',"www.gov.uk/design-principles/style-guide"],
            ['facilitate', "Instead, say something specific about how you are helping - www.gov.uk/design-principles/style-guide"],
            ['facilitating', "Instead, say something specific about how you are helping - www.gov.uk/design-principles/style-guide"],
            ['faq', "Instead, improve the original communication piece so that questions are asked *in*frequently. See www.gov.uk/design-principles/style-guide#faqs"],
            ['focusing', "Unless in the photographic sense - www.gov.uk/design-principles/style-guide"],
            ['foster', "Unless it is children - www.gov.uk/design-principles/style-guide"],
            ['fostering', "Unless it is children - www.gov.uk/design-principles/style-guide"],
            ['going forward', "Use 'in future' - www.gov.uk/design-principles/style-guide"],
            ['impact', "Don't use it as a verb - www.gov.uk/design-principles/style-guide"],
            ['in order to',"Superfluous – don’t use it - www.gov.uk/design-principles/style-guide"],
            ['incentivised',"www.gov.uk/design-principles/style-guide"],
            ['incentivise',"www.gov.uk/design-principles/style-guide"],
            ['incentivising',"www.gov.uk/design-principles/style-guide"],
            ['initiate',"www.gov.uk/design-principles/style-guide"],
            ['initiating',"www.gov.uk/design-principles/style-guide"],
            ['key', "Unless it unlocks something. A subject/thing isn't 'key' – it's probably 'important' - www.gov.uk/design-principles/style-guide"],
            ['land', "Don't use 'land' as a verb unless you are talking about aircraft - www.gov.uk/design-principles/style-guide"],
            ['landed', "Don't use 'land' as a verb unless you are talking about aircraft - www.gov.uk/design-principles/style-guide"],
            ['landing', "Don't use 'land' as a verb unless you are talking about aircraft - www.gov.uk/design-principles/style-guide"],
            ['learnings', "Try 'lessons' - www.gov.uk/design-principles/style-guide"],
            ['leverage', "Unless in the financial or mechanical sense - www.gov.uk/design-principles/style-guide"],
            ['leveraging', "Unless in the financial sense - www.gov.uk/design-principles/style-guide"],
            ['liaise',"www.gov.uk/design-principles/style-guide"],
            ['liaising',"www.gov.uk/design-principles/style-guide"],
            ['pledging',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['pledge',"We need to be more specific – we’re either doing something or we’re not - www.gov.uk/design-principles/style-guide"],
            ['progress',"As a verb – what are you actually doing? - www.gov.uk/design-principles/style-guide"],
            ['progressed',"As a verb – what are you actually doing? - www.gov.uk/design-principles/style-guide"],
            ['promote', "Unless you are talking about an ad campaign or similar - www.gov.uk/design-principles/style-guide"],
            ['promoted', "Unless you are talking about an ad campaign or similar - www.gov.uk/design-principles/style-guide"],
            ['promoting', "Unless you are talking about an ad campaign or similar - www.gov.uk/design-principles/style-guide"],
            ['purchase', "Consider 'buy' - www.gov.uk/design-principles/style-guide"],
            ['ring fence',"www.gov.uk/design-principles/style-guide"],
            ['ring fenced',"www.gov.uk/design-principles/style-guide"],
            ['ring fencing',"www.gov.uk/design-principles/style-guide"],
            ['ringfence',"www.gov.uk/design-principles/style-guide"],
            ['ringfenced',"www.gov.uk/design-principles/style-guide"],
            ['robust','www.gov.uk/design-principles/style-guide'],
            ['slim down',"www.gov.uk/design-principles/style-guide"],
            ['slimmed down',"Processes don’t diet – we are probably removing x amount of paperwork, etc - www.gov.uk/design-principles/style-guide"],
            ['slimming down',"Processes don’t diet – we are probably removing x amount of paperwork, etc - www.gov.uk/design-principles/style-guide"],
            ['streamline',"www.gov.uk/design-principles/style-guide"],
            ['streamlined',"www.gov.uk/design-principles/style-guide"],
            ['streamlining',"www.gov.uk/design-principles/style-guide"],
            ['strengthened', "Unless it is strengthening bridges or other structures - www.gov.uk/design-principles/style-guide"],
            ['strengthening', "Unless it is strengthening bridges or other structures - www.gov.uk/design-principles/style-guide"],
            ['such as', "Consider 'like' - www.gov.uk/design-principles/style-guide"],
            ['tackled', "Unless it is rugby, football, some other sport - www.gov.uk/design-principles/style-guide"],
            ['tackling', "Unless it is rugby, football, some other sport - www.gov.uk/design-principles/style-guide"],
            ['tackle', "Unless it is rugby, football, some other sport - www.gov.uk/design-principles/style-guide"],
            ['transforming', "What are you actually doing to change it? - www.gov.uk/design-principles/style-guide"],
            ['transformed', "What actualled happened to change it? - www.gov.uk/design-principles/style-guide"],
            ['transform', "What are you actually doing to change it? - www.gov.uk/design-principles/style-guide"],
            ['utilise', "Use - www.gov.uk/design-principles/style-guide"],
            ['utilised', "Used - www.gov.uk/design-principles/style-guide"],
            ['utilising', "Using - www.gov.uk/design-principles/style-guide"],
            ['you may be able to',"Do not let caveats dictate unwieldy grammar – eg say 'You can' rather than 'You may be able to' - www.gov.uk/design-principles/style-guide - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the disabled',"Use 'disabled people' not 'the disabled' as the collective term - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['deaf to our pleas',"Common phrases that may associate impairments with negative things should be avoided, for example 'deaf to our pleas' or 'blind drunk' - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['blind drunk',"Common phrases that may associate impairments with negative things should be avoided, for example 'deaf to our pleas' or 'blind drunk' - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the handicapped',"disabled (people) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the disabled',"disabled (people) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['confined to a wheelchair',"wheelchair user - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['wheelchair-bound',"wheelchair user - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['mentally handicapped',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['mentally defective',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['retarded',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['subnormal',"with a learning disability (singular) with learning disabilities (plural) - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['cripple',"disabled person - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['spastic',"person with cerebral palsy - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['able-bodied',"non-disabled - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['mental patient',"person with a mental health condition - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['deaf and dumb',"deaf, user of British sign language, person with a hearing impairment - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['deaf mute',"deaf, user of British sign language, person with a hearing impairment - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['the blind',"people with visual impairments; blind people; blind and partially sighted people - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['an epileptic',"a person with / someone who has epilepsy - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['a diabetic',"a person with / someone who has diabetes - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['a depressive',"a person with / someone who has depression - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['dwarf',"someone with restricted growth - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['midget',"someone with restricted growth - odi.dwp.gov.uk/inclusive-communications/representation/language.php"],
            ['iron resolution',"a metaphor which is technically “dead” (e.g., iron resolution) has in effect reverted to being an ordinary word and can generally be used without loss of vividness. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['toe the line',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['tow the line',"Some metaphors now current have been twisted out of their original meaning without those who use them even being aware of the fact. For example, 'toe the line' is sometimes written 'tow the line'. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ring the changes',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ringed the changes',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ringing the changes',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ride roughshod over',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ride roughshod',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['riding roughshod',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['stand shoulder to shoulder',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['standing shoulder to shoulder',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['stood shoulder to shoulder',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['play into the hands',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['played into the hands',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['axe to grind',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['grist to the mill',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['troubled waters',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['order of the day',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['swan song',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['hotbed',"… there is a huge dump of worn-out metaphors which have lost all evocative power and are merely used because they save people the trouble of inventing phrases for themselves … - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['render inoperative',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['rendered inoperative',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['give rise to',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['given rise to',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['gave rise to',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['play a leading part',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['played a leading part',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['make itself felt',"Verbal false limbs. These save the trouble of picking out appropriate verbs and nouns, and at the same time pad each sentence with extra syllables which give it an appearance of symmetry. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['by examination',"Why not 'by examining'?"],
            ['not un',"banal statements are given an appearance of profundity by means of the not un- formation. … One can cure oneself of the not un-formation by memorising this sentence: A not unblock dog was chasing a not unsmall rabbit across a not ungreen field. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['with respect to',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['having regard to',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['the fact that',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['by dint of',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['in the interests of',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['on the hypothesis that',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['greatly to be desired',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['development to be expected',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['expected in the near future',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deserving serious consideration',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deserves serious consideration',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deserved serious consideration',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['brought to a satisfactory conclusion',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['epoch-making', "Adjectives like epoch-making … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['epic', "Adjectives like .. epic … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['triumphant', "Adjectives like .. triumphant … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['unforgettable', "Adjectives like .. unforgettable … are used to dignify the sordid processes of international politics. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['deus ex machine', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['status quo', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['expedite', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['ameliorate', "Bad writers, and especially scientific, political and sociological writers, are nearly always haunted by the notion that Latin or Greek words are grander than Saxon ones. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['exhibit',"Words like … exhibit … are used to dress up simple statements and give an air of scientific impartiality to biased judgments. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['utilize',"Words like … utilize … are used to dress up simple statements and give an air of scientific impartiality to biased judgments. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['categorical',"Words like … categorical … are used to dress up simple statements and give an air of scientific impartiality to biased judgments. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['bestial atrocities',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['iron heel',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['bloodstained tyranny',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['free peoples of the world',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['shoulder to shoulder',"When one watches some tired hack on the platform mechanically repeating the familiar phrases … one often has a curious feeling that one is not watching a live human being but some kind of dummy… - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['do well to bear in mind',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leaves much to be desired',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leave much to be desired',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['serve no good purpose',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['lay the foundations',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['radical transformation',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['explore every avenue',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leave no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leaving no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['left no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['leaving no stone unturned',"George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['jackboot',"from time to time one can even, if one jeers loudly enough, send some worn-out and useless phrase … into the dustbin where it belongs. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['melting pot',"from time to time one can even, if one jeers loudly enough, send some worn-out and useless phrase … into the dustbin where it belongs. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['acid test',"from time to time one can even, if one jeers loudly enough, send some worn-out and useless phrase … into the dustbin where it belongs. - George Orwell, Politics and the English Language, Horizon, April 1946"],
            ['beacon',"(Local Government Association banned words, 2007)"],
            ['best practice',"(Local Government Association banned words, 2007)"],
            ['best-practice',"(Local Government Association banned words, 2007)"],
            ['bottom-up',"(Local Government Association banned words, 2007)"],
            ['can do culture',"(Local Government Association banned words, 2007)"],
            ['can-do culture',"(Local Government Association banned words, 2007)"],
            ['capacity',"(Local Government Association banned words, 2007)"],
            ['cascading',"(Local Government Association banned words, 2007)"],
            ['cautiously welcome...',"(Local Government Association banned words, 2007)"],
            ['champion',"(Local Government Association banned words, 2007)"],
            ['citizen empowerment',"(Local Government Association banned words, 2007)"],
            ['CAAs',"(Local Government Association banned words, 2007)"],
            ['community engagement',"(Local Government Association banned words, 2007)"],
            ['conditionality',"(Local Government Association banned words, 2007)"],
            ['consensual',"(Local Government Association banned words, 2007)"],
            ['contestability',"(Local Government Association banned words, 2007)"],
            ['core message',"(Local Government Association banned words, 2007)"],
            ['core value',"(Local Government Association banned words, 2007)"],
            ['coterminosity',"(Local Government Association banned words, 2007)"],
            ['coterminous',"(Local Government Association banned words, 2007)"],
            ['cross-cutting',"(Local Government Association banned words, 2007)"],
            ['customer',"(Local Government Association banned words, 2007)"],
            ['democratic mandate',"(Local Government Association banned words, 2007)"],
            ['democratic legitimacy',"(Local Government Association banned words, 2007)"],
            ['distorts spending priorities',"(Local Government Association banned words, 2007)"],
            ['early win',"(Local Government Association banned words, 2007)"],
            ['empowerment',"(Local Government Association banned words, 2007)"],
            ['engagement',"(Local Government Association banned words, 2007)"],
            ['engaging users',"(Local Government Association banned words, 2007)"],
            ['enhance',"(Local Government Association banned words, 2007)"],
            ['evidence base',"(Local Government Association banned words, 2007)"],
            ['external challenge',"(Local Government Association banned words, 2007)"],
            ['fast-track',"(Local Government Association banned words, 2007)"],
            ['fast track',"(Local Government Association banned words, 2007)"],
            ['framework',"(Local Government Association banned words, 2007)"],
            ['fulcrum',"(Local Government Association banned words, 2007)"],
            ['good practice',"(Local Government Association banned words, 2007)"],
            ['good-practice',"(Local Government Association banned words, 2007)"],
            ['governance',"(Local Government Association banned words, 2007)"],
            ['holistic',"(Local Government Association banned words, 2007)"],
            ['improvement levers',"(Local Government Association banned words, 2007)"],
            ['incentivising',"(Local Government Association banned words, 2007)"],
            ['incentivise',"(Local Government Association banned words, 2007)"],
            ['initiative',"(Local Government Association banned words, 2007)"],
            ['joined up',"(Local Government Association banned words, 2007)"],
            ['joined-up',"(Local Government Association banned words, 2007)"],
            ['joint working',"(Local Government Association banned words, 2007)"],
            ['LAAs',"(Local Government Association banned words, 2007)"],
            ['level playing field',"(Local Government Association banned words, 2007)"],
            ['localities',"(Local Government Association banned words, 2007)"],
            ['meaningful consultation',"(Local Government Association banned words, 2007)"],
            ['meaningful dialogue',"(Local Government Association banned words, 2007)"],
            ['MAAs',"(Local Government Association banned words, 2007)"],
            ['menu of options',"(Local Government Association banned words, 2007)"],
            ['multi-agency',"(Local Government Association banned words, 2007)"],
            ['multidisciplinary',"(Local Government Association banned words, 2007)"],
            ['outcomes',"(Local Government Association banned words, 2007)"],
            ['output',"(Local Government Association banned words, 2007)"],
            ['participatory',"(Local Government Association banned words, 2007)"],
            ['partnerships',"(Local Government Association banned words, 2007)"],
            ['pathfinder',"(Local Government Association banned words, 2007)"],
            ['peer challenge',"(Local Government Association banned words, 2007)"],
            ['performance network',"(Local Government Association banned words, 2007)"],
            ['place shaping',"(Local Government Association banned words, 2007)"],
            ['predictors of beaconicity',"(Local Government Association banned words, 2007)"],
            ['preventative services',"(Local Government Association banned words, 2007)"],
            ['priority',"(Local Government Association banned words, 2007)"],
            ['process driven',"(Local Government Association banned words, 2007)"],
            ['quick hit',"(Local Government Association banned words, 2007)"],
            ['quick win',"(Local Government Association banned words, 2007)"],
            ['resource allocation',"(Local Government Association banned words, 2007)"],
            ['revenue streams',"(Local Government Association banned words, 2007)"],
            ['risk based',"(Local Government Association banned words, 2007)"],
            ['scaled-back',"(Local Government Association banned words, 2007)"],
            ['scoping',"(Local Government Association banned words, 2007)"],
            ['seedbed',"(Local Government Association banned words, 2007)"],
            ['service users',"(Local Government Association banned words, 2007)"],
            ['shared priority',"(Local Government Association banned words, 2007)"],
            ['signpost',"(Local Government Association banned words, 2007)"],
            ['single point of contact',"(Local Government Association banned words, 2007)"],
            ['slippage',"(Local Government Association banned words, 2007)"],
            ['social contracts',"(Local Government Association banned words, 2007)"],
            ['stakeholder',"(Local Government Association banned words, 2007)"],
            ['step change',"(Local Government Association banned words, 2007)"],
            ['strategic',"(Local Government Association banned words, 2007)"],
            ['overarching',"(Local Government Association banned words, 2007)"],
            ['streamlined',"(Local Government Association banned words, 2007)"],
            ['subsidiary',"(Local Government Association banned words, 2007)"],
            ['sustainable',"(Local Government Association banned words, 2007)"],
            ['symposium',"(Local Government Association banned words, 2007)"],
            ['synergies',"(Local Government Association banned words, 2007)"],
            ['tested for soundness',"(Local Government Association banned words, 2007)"],
            ['third sector',"(Local Government Association banned words, 2007)"],
            ['top-down',"(Local Government Association banned words, 2007)"],
            ['top down',"(Local Government Association banned words, 2007)"],
            ['transformational',"(Local Government Association banned words, 2007)"],
            ['transparency',"(Local Government Association banned words, 2007)"],
            ['value-added',"(Local Government Association banned words, 2007)"],
            ['vision',"(Local Government Association banned words, 2007)"],
            ['visionary',"(Local Government Association banned words, 2007)"],
            ['across-the-piece',"(Local Government Association banned words, 2009)"],
            ['advocate',"(Local Government Association banned words, 2009)"],
            ['area based',"(Local Government Association banned words, 2009)"],
            ['area focused',"(Local Government Association banned words, 2009)"],
            ['autonomous',"(Local Government Association banned words, 2009)"],
            ['baseline',"(Local Government Association banned words, 2009)"],
            ['benchmarking',"(Local Government Association banned words, 2009)"],
            ['blue sky thinking',"(Local Government Association banned words, 2009)"],
            ['capabilities',"(Local Government Association banned words, 2009)"],
            ['challenge',"(Local Government Association banned words, 2009)"],
            ['client',"(Local Government Association banned words, 2009)"],
            ['cohesive communities',"(Local Government Association banned words, 2009)"],
            ['cohesiveness',"(Local Government Association banned words, 2009)"],
            ['collaboration',"(Local Government Association banned words, 2009)"],
            ['commissioning',"(Local Government Association banned words, 2009)"],
            ['compact',"(Local Government Association banned words, 2009)"],
            ['contextual',"(Local Government Association banned words, 2009)"],
            ['core developments',"(Local Government Association banned words, 2009)"],
            ['core principles',"(Local Government Association banned words, 2009)"],
            ['cross-fertilisation',"(Local Government Association banned words, 2009)"],
            ['direction of travel',"(Local Government Association banned words, 2009)"],
            ['double devolution',"(Local Government Association banned words, 2009)"],
            ['downstream',"(Local Government Association banned words, 2009)"],
            ['edge-fit',"(Local Government Association banned words, 2009)"],
            ['embedded',"(Local Government Association banned words, 2009)"],
            ['enabler',"(Local Government Association banned words, 2009)"],
            ['exemplar',"(Local Government Association banned words, 2009)"],
            ['flex',"(Local Government Association banned words, 2009)"],
            ['flexibilities and freedoms',"(Local Government Association banned words, 2009)"],
            ['functionality',"(Local Government Association banned words, 2009)"],
            ['funding streams',"(Local Government Association banned words, 2009)"],
            ['gateway review',"(Local Government Association banned words, 2009)"],
            ['horizon scanning',"(Local Government Association banned words, 2009)"],
            ['income streams',"(Local Government Association banned words, 2009)"],
            ['indicators',"(Local Government Association banned words, 2009)"],
            ['innovative capacity',"(Local Government Association banned words, 2009)"],
            ['inspectorates',"(Local Government Association banned words, 2009)"],
            ['interdepartmental',"(Local Government Association banned words, 2009)"],
            ['interface',"(Local Government Association banned words, 2009)"],
            ['iteration',"(Local Government Association banned words, 2009)"],
            ['lowlights',"(Local Government Association banned words, 2009)"],
            ['mainstreaming',"(Local Government Association banned words, 2009)"],
            ['management capacity',"(Local Government Association banned words, 2009)"],
            ['meaningful dialogue',"(Local Government Association banned words, 2009)"],
            ['mechanisms',"(Local Government Association banned words, 2009)"],
            ['municipalities',"(Local Government Association banned words, 2009)"],
            ['network model',"(Local Government Association banned words, 2009)"],
            ['normalising',"(Local Government Association banned words, 2009)"],
            ['outsourced',"(Local Government Association banned words, 2009)"],
            ['paradigm',"(Local Government Association banned words, 2009)"],
            ['parameter',"(Local Government Association banned words, 2009)"],
            ['partnership working',"(Local Government Association banned words, 2009)"],
            ['pooled budgets',"(Local Government Association banned words, 2009)"],
            ['pooled resources',"(Local Government Association banned words, 2009)"],
            ['pooled risk',"(Local Government Association banned words, 2009)"],
            ['populace',"(Local Government Association banned words, 2009)"],
            ['potentialities',"(Local Government Association banned words, 2009)"],
            ['practitioners',"(Local Government Association banned words, 2009)"],
            ['prioritization',"(Local Government Association banned words, 2009)"],
            ['proactive',"(Local Government Association banned words, 2009)"],
            ['procure',"(Local Government Association banned words, 2009)"],
            ['promulgate',"(Local Government Association banned words, 2009)"],
            ['proportionality',"(Local Government Association banned words, 2009)"],
            ['protocol',"(Local Government Association banned words, 2009)"],
            ['provider',"(Local Government Association banned words, 2009)"],
            ['quantum',"(Local Government Association banned words, 2009)"],
            ['rationalisation',"(Local Government Association banned words, 2009)"],
            ['rebaselining',"(Local Government Association banned words, 2009)"],
            ['reconfigured',"(Local Government Association banned words, 2009)"],
            ['sector wise',"(Local Government Association banned words, 2009)"],
            ['self-aggrandizement',"(Local Government Association banned words, 2009)"],
            ['shared priority',"(Local Government Association banned words, 2009)"],
            ['shell developments',"(Local Government Association banned words, 2009)"],
            ['single conversations',"(Local Government Association banned words, 2009)"],
            ['situational',"(Local Government Association banned words, 2009)"],
            ['social exclusion',"(Local Government Association banned words, 2009)"],
            ['spatial',"(Local Government Association banned words, 2009)"],
            ['sub-regional',"(Local Government Association banned words, 2009)"],
            ['subsidiarity',"(Local Government Association banned words, 2009)"],
            ['systematics',"(Local Government Association banned words, 2009)"],
            ['taxonomy',"(Local Government Association banned words, 2009)"],
            ['thematic',"(Local Government Association banned words, 2009)"],
            ['thinking outside of the box',"(Local Government Association banned words, 2009)"],
            ['toolkit',"(Local Government Association banned words, 2009)"],
            ['trajectory',"(Local Government Association banned words, 2009)"],
            ['tranche',"(Local Government Association banned words, 2009)"],
            ['transactional',"(Local Government Association banned words, 2009)"],
            ['upstream',"(Local Government Association banned words, 2009)"],
            ['upward trend',"(Local Government Association banned words, 2009)"],
            ['wellbeing',"(Local Government Association banned words, 2009)"],
            ['worklessness',"(Local Government Association banned words, 2009)"],
            ['actioned'],
            ['discourse', "Discussion"],
            ['drive forward'],
            ['driven forward'],
            ['driving forward'],
            ['front door'],
            ['go forward'],
            ['low hanging fruit'],
            ['mobilise'],
            ['moving forward'],
            ['moving toward'],
            ['no wrong door'],
            ['one front door'],
            ['one stop shop'],
            ['one-stop shop'],
            ['overarching'],
            ['reach out to', "Consider 'contact'"],
            ['reached out to', "Consider 'contacted'"],
            ['synergy'],
            ['tasked'],
            ['webinar']
	],
	wordsLen = words.length,
	idx;

    function addEvent(elem, eventType, handler) {
        if (elem.addEventListener) {
            elem.addEventListener (eventType, handler, false);
        } else if (elem.attachEvent) {
            handler = function (e) {
                var target = (typeof e.target === 'undefined') ? e.srcElement : e.target;

                handler.call(target, { 'target' : target });
            };
            elem.attachEvent ('on' + eventType, handler);
        } else {
            return false;
        }
    };	

	var popup = {
		add : function (element, notes, idx) {
			var popup;

			popup = document.createElement("div");
			popup.id = "jargonepopup-" + (idx + 1);
			popup.className = "jargonepopup";
			document.body.appendChild(popup);
			popup.innerHTML = notes;
			popup.style.left = element.getBoundingClientRect().left + 'px';
			popup.style.top = element.getBoundingClientRect().top + 20 + 'px';
			popup.style.visibility = 'visible';
			element.setAttribute('aria-describedby', popup.id);
			this.current.idx = (idx + 1);
			this.current.element = element;
		},
		remove : function () {
			var popup = document.getElementById("jargonepopup-" + this.current.idx);

			if (popup) {
				document.body.removeChild(popup);
				this.current.element.removeAttribute('aria-describedby');
				this.current.idx = null;
				this.current.element = null;
			}
		},
		current : {
			idx : null,
			element : null
		}
	};

	var popupEvt = (function () {
		var openIdx = null,
			focusedWord = null;

		return (function (e) {
			var element = e.target,
				term;

			if (!element.className || !element.className.match(/jargonehighlight/)) { return; }

			if ((openIdx !== null) || (e.type === 'focusout')) {
				popup.remove();
				focusedElement = null;
			} else {
				term = element.firstChild.nodeValue.toLowerCase();
				for (idx = 0; idx < wordsLen; idx++) {
						if (term.match(new RegExp(words[idx][0])) && words[idx][1]) {
						// clicks give focus so use it for capturing both events
						// focus is retained by elements when scrolling clears their popup so use clicks as backup
						if (e.type === 'click') {
							if ((focusedWord === element) && (popup.current.element === null)) {
								popup.add(element, words[idx][1], idx);
							}
						} else { // focusin
							focusedWord = element;
							popup.add(element, words[idx][1], idx);
						}
					}
				}
			}

			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		});
	}());

    // From http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/
    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ?
                    new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length,
            excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 &&
                (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".jargonehighlight { background-color: #FFFF88 !important; color: black; } .jargonehasnotes { cursor: help; border-bottom:1px dashed !important; } .jargonepopup { position: fixed; z-index: 1000 !important; visibility: hidden; background-color: #FFFFCC; color: black; border: solid silver 1px; margin: 5px; padding: 6px;} ";
    document.getElementsByTagName("head")[0].appendChild(css);

	for (idx = 0; idx < wordsLen; idx++) { // for each word
		words[idx][0] = words[idx][0].replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
		var pattern = '\\b' + words[idx][0];
		if (pattern.slice(-6) == '\\.\\.\\.') { // don't include end word boundary check if word ended with '...'
			pattern = pattern.slice(0, -6);
		    words[idx][0] = words[idx][0].slice(0, -6);
		} else {
        	if (pattern.slice(-1) != '.') {
            	pattern = pattern + '\\b';
        	}
        }
        var regex = new RegExp('(' + pattern + ')', 'ig');
    
		if (words[idx].length > 0 && words[idx][1] != undefined) {
          findAndReplace( regex, '<span class="jargonehighlight jargonehasnotes" tabindex="0">$1<\/span>');
        } else { // only use jargonehasnotes class if the entry has associated notes
          findAndReplace( regex, '<span class="jargonehighlight" tabindex="0">$1<\/span>');
        }
	}
	addEvent(document, 'focusin', popupEvt);
	addEvent(document, 'focusout', popupEvt);
	addEvent(document, 'click', popupEvt);
	addEvent(document, 'scroll', function () { popup.remove(); });
})();
