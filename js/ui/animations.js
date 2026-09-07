export function playDamageAnimation(
    element
) {

    if (!element) {

        return;

    }


    element.classList.remove(
        "damage-animation"
    );


    void element.offsetWidth;


    element.classList.add(
        "damage-animation"
    );

}


export function playHealAnimation(
    element
) {

    if (!element) {

        return;

    }


    element.classList.remove(
        "heal-animation"
    );


    void element.offsetWidth;


    element.classList.add(
        "heal-animation"
    );

}