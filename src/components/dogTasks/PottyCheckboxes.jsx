export default function PottyCheckboxes ({event, setPeedCheckboxStatus, setPoopedCheckboxStatus, poopedCheckboxStatus}) {

        console.log(event)

        const check = event.target
        switch (true){
        case check.name === 'peedCheckbox' && check.checked === true:
            setPeedCheckboxStatus(true)
            break;
        case check.name === 'peedCheckbox' && check.checked === false:
            setPeedCheckboxStatus(false);
            break;
        case check.name === 'poopedCheckbox' && check.checked === true:
            setPoopedCheckboxStatus(true);
            break;
        case check.name === 'poopedCheckbox' && check.checked === false:
            setPoopedCheckboxStatus(false);
            break;
        default:
            // setPottyStatus('Did not go potty.')
            break;
        }
        console.log('49', poopedCheckboxStatus)
}