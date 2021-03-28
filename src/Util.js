import { v4 as uuidv4 } from "uuid"

/**
 * Öffnet eine URL
 * @param url die URL
 */
export function openUrl(url) {
    location.assign(url)
}

/**
 * Sollte benutzt werden um Sounds für die State des Soundboardes "sounds" zu erstellen
 * @param {String} name Name des Sounds, der im Soundboard angezeigt wird
 * @param {String} category Kategorie des Sounds
 * @param {String} url die URL des Sounds
 * @returns ein Sound Objekt
 */
export function createSound(name, category, url) {
    return {
        name,
        category,
        url,
        id: uuidv4(),
    }
}

/**
 * @param sounds die Sounds des Soundboardes
 * @returns eine Liste aller Namen der kategorien
 */
export function getCategoryNames(sounds) {
    let names = []

    for (let sound of sounds) {
        let name = sound.category

        if (!names.includes(name)) {
            names.push(name)
        }
    }

    return names
}

/**
 * @param sounds die Sounds des Soundboardes
 * @param category der Name der Kategorie
 * @returns eine Liste aller Sounds aus dieser Kategorie
 */
export function getSoundsFromCategory(sounds, category) {
    let soundsWithCategory = []

    for (let sound of sounds) {
        if (sound.category == category) {
            soundsWithCategory.push(sound)
        }
    }

    return soundsWithCategory
}

/**
 * Lädt ein Soundboard
 * @param url die URL zum soundboard.json des Soundboades
 * @throws Wenn der es entweder einen Fehler beim Laden der soundboard.json Datei oder einen Fehler beim Lesen dieser Datei gab
 */
export async function loadSoundboard(setTitle, setSounds, url) {
    try {
        const res = await fetch(url)
        const json = await res.json()

        setTitle(json.title)

        let sounds = []
        for (let sound of json.sounds) {
            sounds.push(createSound(sound.name, sound.category, sound.url))
        }
        setSounds(sounds)
    } catch (err) {
        alert("Fehler beim Laden des Soundboardes")
        console.log(err)
    }
}
