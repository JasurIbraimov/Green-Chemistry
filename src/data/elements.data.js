const SUBGROUPS = {
    nonmetals: {
        en: 'Nonmetals',
        ru: 'Неметаллы'
    },
    alkaliMetals: {
        en: 'Alkali metals',
        ru: 'Щелочные металлы'
    },
    nobleGases: {
        en: 'Noble gases',
        ru: 'Благородные газы'
    },
    halogens: {
        en: 'Halogens',
        ru: 'Галогены'
    },
    metalloids: {
        en: 'Metalloids',
        ru: 'Металлоиды'
    },
    postTransitionMetals: {
        en: 'Post transition metals',
        ru: 'Пост переходные металлы'
    },
    transitionMetals: {
        en:  'Transition metals',
        ru: 'Переходные металлы'
    },
    alkalineEarthMetals: {
        en: 'Alkaline earth metals',
        ru: 'Щелочно-земельные металлы'
    },
    lanthanides: {
        en: 'Lanthanides',
        ru: 'Лантаноиды'
    },
    actinides: {
        en: 'Actinides',
        ru: 'Актиноиды'
    }
}
export const ELEMENTS_DATA = [
    {
        atom_number: 1,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'H',
        name: {
            ru: 'Водород',
            en: 'Hydrogen'
        },
        atom_mass: 1.01,
        position: {
            x: 1,
            y: 1
        }
    },
    {
        atom_number: 2,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'He',
        name: {
            ru: 'Гелий',
            en: 'Helium'
        },
        atom_mass: 4,
        position: {
            x: 19,
            y: 1
        }
    },
    {
        atom_number: 3,
        subgroup: SUBGROUPS.alkaliMetals,
        symbol: 'Li',
        name: {
            ru: 'Литий',
            en: 'Lithium'
        },
        atom_mass: 6.94,
        position: {
            x: 1,
            y: 2
        }
    },
    {
        atom_number: 4,
        subgroup: SUBGROUPS.alkalineEarthMetals,
        symbol: 'Be',
        name: {
            ru: 'Берилий',
            en: 'Beryllium'
        },
        atom_mass: 9.01,
        position: {
            x: 2,
            y: 2
        }
    },
    {
        atom_number: 5,
        subgroup: SUBGROUPS.metalloids,
        symbol: 'B',
        name: {
            ru: 'Бор',
            en: 'Boron'
        },
        atom_mass: 10.81,
        position: {
            x: 14,
            y: 2
        }
    },
    {
        atom_number: 6,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'C',
        name: {
            ru: 'Углерод',
            en: 'Carbon'
        },
        atom_mass: 12.01,
        position: {
            x: 15,
            y: 2
        }
    },
    {
        atom_number: 7,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'N',
        name: {
            ru: 'Азот',
            en: 'Nitrogen'
        },
        atom_mass: 14.01,
        position: {
            x: 16,
            y: 2
        }
    },
    {
        atom_number: 8,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'O',
        name: {
            ru: 'Кислород',
            en: 'Oxygen'
        },
        atom_mass: 15.99,
        position: {
            x: 17,
            y: 2
        }
    },
    {
        atom_number: 9,
        subgroup: SUBGROUPS.halogens,
        symbol: 'F',
        name: {
            ru: 'Фтор',
            en: 'Fluorine'
        },
        atom_mass: 18.99,
        position: {
            x: 18,
            y: 2
        }
    },
    {
        atom_number: 10,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'Ne',
        name: {
            ru: 'Неон',
            en: 'Neon'
        },
        atom_mass: 20.18,
        position: {
            x: 19,
            y: 2
        }
    },
    {
        atom_number: 11,
        subgroup: SUBGROUPS.alkaliMetals,
        symbol: 'Na',
        name: {
            ru: 'Натрий',
            en: 'Sodium'
        },
        atom_mass: 22.99,
        position: {
            x: 1,
            y: 3
        }
    },
    {
        atom_number: 12,
        subgroup: SUBGROUPS.alkalineEarthMetals,
        symbol: 'Mg',
        name: {
            ru: 'Магний',
            en: 'Magnesium'
        },
        atom_mass: 24.3,
        position: {
            x: 2,
            y: 3
        }
    },
    {
        atom_number: 13,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Al',
        name: {
            ru: 'Алюминий',
            en: 'Aluminum'
        },
        atom_mass: 26.98,
        position: {
            x: 14,
            y: 3
        }
    },
    {
        atom_number: 14,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Si',
        name: {
            ru: 'Кремний',
            en: 'Silicon'
        },
        atom_mass: 28.08,
        position: {
            x: 15,
            y: 3
        }
    },
    {
        atom_number: 15,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'P',
        name: {
            ru: 'Фосфор',
            en: 'Phosphorus'
        },
        atom_mass: 30.97,
        position: {
            x: 16,
            y: 3
        }
    },
    {
        atom_number: 16,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'S',
        name: {
            ru: 'Сера',
            en: 'Sulfur'
        },
        atom_mass: 32.06,
        position: {
            x: 17,
            y: 3
        }
    },
    {
        atom_number: 17,
        subgroup: SUBGROUPS.halogens,
        symbol: 'Cl',
        name: {
            ru: 'Хлор',
            en: 'Chlorine'
        },
        atom_mass: 35.45,
        position: {
            x: 18,
            y: 3
        }
    },
    {
        atom_number: 18,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'Ar',
        name: {
            ru: 'Аргон',
            en: 'Argon'
        },
        atom_mass: 39.95,
        position: {
            x: 19,
            y: 3
        }
    },
    {
        atom_number: 19,
        subgroup: SUBGROUPS.alkaliMetals,
        symbol: 'K',
        name: {
            ru: 'Калий',
            en: 'Potassium'
        },
        atom_mass: 39.1,
        position: {
            x: 1,
            y: 4
        }
    },
    {
        atom_number: 20,
        subgroup: SUBGROUPS.alkalineEarthMetals,
        symbol: 'Ca',
        name: {
            ru: 'Кальций',
            en: 'Calcium'
        },
        atom_mass: 40.08,
        position: {
            x: 2,
            y: 4
        }
    },
    {
        atom_number: 21,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Sc',
        name: {
            ru: 'Скандий',
            en: 'Scandium'
        },
        atom_mass: 44.96,
        position: {
            x: 4,
            y: 4
        }
    },
    {
        atom_number: 22,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ti',
        name: {
            ru: 'Титан',
            en: 'Titanium'
        },
        atom_mass: 47.87,
        position: {
            x: 5,
            y: 4
        }
    },
    {
        atom_number: 23,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'V',
        name: {
            ru: 'Ванадий',
            en: 'Vanadium'
        },
        atom_mass: 50.94,
        position: {
            x: 6,
            y: 4
        }
    },
    {
        atom_number: 24,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Cr',
        name: {
            ru: 'Хром',
            en: 'Chromium'
        },
        atom_mass: 51.99,
        position: {
            x: 7,
            y: 4
        }
    },
    {
        atom_number: 25,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Cr',
        name: {
            ru: 'Марганец',
            en: 'Manganese'
        },
        atom_mass: 54.94,
        position: {
            x: 8,
            y: 4
        }
    },
    {
        atom_number: 26,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Fe',
        name: {
            ru: 'Железо',
            en: 'Iron'
        },
        atom_mass: 55.85,
        position: {
            x: 9,
            y: 4
        }
    },
    {
        atom_number: 27,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Co',
        name: {
            ru: 'Кобальт',
            en: 'Cobalt'
        },
        atom_mass: 58.93,
        position: {
            x: 10,
            y: 4
        }
    },
    {
        atom_number: 28,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ni',
        name: {
            ru: 'Никель',
            en: 'Nickel'
        },
        atom_mass: 58.69,
        position: {
            x: 11,
            y: 4
        }
    },
    {
        atom_number: 29,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Cu',
        name: {
            ru: 'Медь',
            en: 'Copper'
        },
        atom_mass: 63.55,
        position: {
            x: 12,
            y: 4
        }
    },
    {
        atom_number: 30,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Zn',
        name: {
            ru: 'Цинк',
            en: 'Zinc'
        },
        atom_mass: 65.38,
        position: {
            x: 13,
            y: 4
        }
    },
    {
        atom_number: 31,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Ga',
        name: {
            ru: 'Галий',
            en: 'Gallium'
        },
        atom_mass: 69.72,
        position: {
            x: 14,
            y: 4
        }
    },
    {
        atom_number: 32,
        subgroup: SUBGROUPS.metalloids,
        symbol: 'Ge',
        name: {
            ru: 'Германий',
            en: 'Germanium'
        },
        atom_mass: 72.63,
        position: {
            x: 15,
            y: 4
        }
    },
    {
        atom_number: 33,
        subgroup: SUBGROUPS.metalloids,
        symbol: 'As',
        name: {
            ru: 'Мышьяк',
            en: 'Arsenic'
        },
        atom_mass: 74.92,
        position: {
            x: 16,
            y: 4
        }
    },
    {
        atom_number: 34,
        subgroup: SUBGROUPS.nonmetals,
        symbol: 'Se',
        name: {
            ru: 'Селен',
            en: 'Selenium'
        },
        atom_mass: 78.97,
        position: {
            x: 17,
            y: 4
        }
    },
    {
        atom_number: 35,
        subgroup: SUBGROUPS.halogens,
        symbol: 'Br',
        name: {
            ru: 'Бром',
            en: 'Bromine'
        },
        atom_mass: 79.9,
        position: {
            x: 18,
            y: 4
        }
    },
    {
        atom_number: 36,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'Kr',
        name: {
            ru: 'Криптон',
            en: 'Krypton'
        },
        atom_mass: 83.8,
        position: {
            x: 19,
            y: 4
        }
    },
    {
        atom_number: 37,
        subgroup: SUBGROUPS.alkaliMetals,
        symbol: 'Rb',
        name: {
            ru: 'Рубидий',
            en: 'Rubidium'
        },
        atom_mass: 85.47,
        position: {
            x: 1,
            y: 5
        }
    },
    {
        atom_number: 38,
        subgroup: SUBGROUPS.alkalineEarthMetals,
        symbol: 'Sr',
        name: {
            ru: 'Стронций',
            en: 'Strontium'
        },
        atom_mass: 87.62,
        position: {
            x: 2,
            y: 5
        }
    },
    {
        atom_number: 39,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Y',
        name: {
            ru: 'Иттрий',
            en: 'Yttrium'
        },
        atom_mass: 88.91,
        position: {
            x: 4,
            y: 5,
        }
    },
    {
        atom_number: 40,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Zr',
        name: {
            ru: 'Цирконий',
            en: 'Zirconium'
        },
        atom_mass: 91.22,
        position: {
            x: 5,
            y: 5
        }
    },
    {
        atom_number: 41,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Nb',
        name: {
            ru: 'Ниобий',
            en: 'Niobium'
        },
        atom_mass: 92.91,
        position: {
            x: 6,
            y: 5
        }
    },
    {
        atom_number: 42,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Mo',
        name: {
            ru: 'Молибден',
            en: 'Molybdenum'
        },
        atom_mass: 95.95,
        position: {
            x: 7,
            y: 5
        }
    },
    {
        atom_number: 43,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Tc',
        name: {
            ru: 'Технеций',
            en: 'Technetium'
        },
        atom_mass: 97,
        position: {
            x: 8,
            y: 5
        }
    },
    {
        atom_number: 44,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ru',
        name: {
            ru: 'Рутений',
            en: 'Ruthenium'
        },
        atom_mass: 101.07,
        position: {
            x: 9,
            y: 5
        }
    },
    {
        atom_number: 45,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Rh',
        name: {
            ru: 'Родий',
            en: 'Rhodium'
        },
        atom_mass: 102.91,
        position: {
            x: 10,
            y: 5
        }
    },
    {
        atom_number: 46,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Pd',
        name: {
            ru: 'Паладий',
            en: 'Palladium'
        },
        atom_mass: 106.42,
        position: {
            x: 11,
            y: 5
        }
    },
    {
        atom_number: 47,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ag',
        name: {
            ru: 'Серебро',
            en: 'Silver'
        },
        atom_mass: 107.87,
        position: {
            x: 12,
            y: 5
        }
    },
    {
        atom_number: 48,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Cd',
        name: {
            ru: 'Кадмий',
            en: 'Cadmium'
        },
        atom_mass: 112.41,
        position: {
            x: 13,
            y: 5
        }
    },
    {
        atom_number: 49,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'In',
        name: {
            ru: 'Индий',
            en: 'Indium'
        },
        atom_mass: 114.82,
        position: {
            x: 14,
            y: 5
        }
    },
    {
        atom_number: 50,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Sn',
        name: {
            ru: 'Олово',
            en: 'Tin'
        },
        atom_mass: 118.71,
        position: {
            x: 15,
            y: 5
        }
    },
    {
        atom_number: 51,
        subgroup: SUBGROUPS.metalloids,
        symbol: 'Sb',
        name: {
            ru: 'Сурьма',
            en: 'Antimony'
        },
        atom_mass: 121.76,
        position: {
            x: 16,
            y: 5
        }
    },
    {
        atom_number: 52,
        subgroup: SUBGROUPS.metalloids,
        symbol: 'Te',
        name: {
            ru: 'Теллур',
            en: 'Tellurium'
        },
        atom_mass: 127.6,
        position: {
            x: 17,
            y: 5
        }
    },
    {
        atom_number: 53,
        subgroup: SUBGROUPS.halogens,
        symbol: 'I',
        name: {
            ru: 'Иод',
            en: 'Iodine'
        },
        atom_mass: 126.9,
        position: {
            x: 18,
            y: 5
        }
    },
    {
        atom_number: 54,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'Xe',
        name: {
            ru: 'Ксенон',
            en: 'Xenon'
        },
        atom_mass: 131.29,
        position: {
            x: 19,
            y: 5
        }
    },
    {
        atom_number: 55,
        subgroup: SUBGROUPS.alkaliMetals,
        symbol: 'Cs',
        name: {
            ru: 'Цезий',
            en: 'Cesium'
        },
        atom_mass: 132.91,
        position: {
            x: 1,
            y: 6
        }
    },
    {
        atom_number: 56,
        subgroup: SUBGROUPS.alkalineEarthMetals,
        symbol: 'Ba',
        name: {
            ru: 'Барий',
            en: 'Barium'
        },
        atom_mass: 137.33,
        position: {
            x: 2,
            y: 6
        }
    },
    {
        atom_number: 72,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Hf',
        name: {
            ru: 'Гафний',
            en: 'Hafnium'
        },
        atom_mass: 178.49,
        position: {
            x: 5,
            y: 6,
        }
    },
    {
        atom_number: 73,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ta',
        name: {
            ru: 'Тантал',
            en: 'Tantalum'
        },
        atom_mass: 180.95,
        position: {
            x: 6,
            y: 6,
        }
    },
    {
        atom_number: 74,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'W',
        name: {
            ru: 'Вольфрам',
            en: 'Tungsten'
        },
        atom_mass: 183.84,
        position: {
            x: 7,
            y: 6,
        }
    },
    {
        atom_number: 75,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Re',
        name: {
            ru: 'Рений',
            en: 'Rhenium'
        },
        atom_mass: 186.21,
        position: {
            x: 8,
            y: 6,
        }
    },
    {
        atom_number: 76,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Os',
        name: {
            ru: 'Осмий',
            en: 'Osmium'
        },
        atom_mass: 190.23,
        position: {
            x: 9,
            y: 6,
        }
    },
    {
        atom_number: 77,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ir',
        name: {
            ru: 'Осмий',
            en: 'Iridium'
        },
        atom_mass: 192.22,
        position: {
            x: 10,
            y: 6,
        }
    },
    {
        atom_number: 78,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Pt',
        name: {
            ru: 'Платина',
            en: 'Platinum'
        },
        atom_mass: 195.08,
        position: {
            x: 11,
            y: 6,
        }
    },
    {
        atom_number: 79,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Au',
        name: {
            ru: 'Золото',
            en: 'Gold'
        },
        atom_mass: 196.97,
        position: {
            x: 12,
            y: 6,
        }
    },
    {
        atom_number: 80,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Hg',
        name: {
            ru: 'Ртуть',
            en: 'Mercury'
        },
        atom_mass: 200.59,
        position: {
            x: 13,
            y: 6,
        }
    },
    {
        atom_number: 81,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Tl',
        name: {
            ru: 'Талий',
            en: 'Thallium'
        },
        atom_mass: 204.38,
        position: {
            x: 14,
            y: 6,
        }
    },
    {
        atom_number: 82,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Pb',
        name: {
            ru: 'Свинец',
            en: 'Lead'
        },
        atom_mass: 207.2,
        position: {
            x: 15,
            y: 6,
        }
    },
    {
        atom_number: 83,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Bi',
        name: {
            ru: 'Висмут',
            en: 'Bismuth'
        },
        atom_mass: 208.98,
        position: {
            x: 16,
            y: 6,
        }
    },
    {
        atom_number: 84,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Po',
        name: {
            ru: 'Полоний',
            en: 'Polonium'
        },
        atom_mass: 209,
        position: {
            x: 17,
            y: 6,
        }
    },
    {
        atom_number: 85,
        subgroup: SUBGROUPS.halogens,
        symbol: 'At',
        name: {
            ru: 'Астат',
            en: 'Astatine'
        },
        atom_mass: 210,
        position: {
            x: 18,
            y: 6,
        }
    },
    {
        atom_number: 86,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'Rn',
        name: {
            ru: 'Радон',
            en: 'Radon'
        },
        atom_mass: 222,
        position: {
            x: 19,
            y: 6,
        }
    },
    {
        atom_number: 87,
        subgroup: SUBGROUPS.alkaliMetals,
        symbol: 'Fr',
        name: {
            ru: 'Франций',
            en: 'Francium'
        },
        atom_mass: 223,
        position: {
            x: 1,
            y: 7,
        }
    },
    {
        atom_number: 88,
        subgroup: SUBGROUPS.alkalineEarthMetals,
        symbol: 'Ra',
        name: {
            ru: 'Радий',
            en: 'Radium'
        },
        atom_mass: 226,
        position: {
            x: 2,
            y: 7,
        }
    },
    {
        atom_number: 104,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Rf',
        name: {
            ru: 'Резерфордий',
            en: 'Rutherfordium'
        },
        atom_mass: 267,
        position: {
            x: 5,
            y: 7,
        }
    },
    {
        atom_number: 105,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Db',
        name: {
            ru: 'Дубний',
            en: 'Dubnium'
        },
        atom_mass: 270,
        position: {
            x: 6,
            y: 7,
        }
    },
    {
        atom_number: 106,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Sg',
        name: {
            ru: 'Сиборгий',
            en: 'Seaborgium'
        },
        atom_mass: 269,
        position: {
            x: 7,
            y: 7,
        }
    },
    {
        atom_number: 107,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Bh',
        name: {
            ru: 'Борий',
            en: 'Bohrium'
        },
        atom_mass: 270,
        position: {
            x: 8,
            y: 7,
        }
    },
    {
        atom_number: 108,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Hs',
        name: {
            ru: 'Хассий',
            en: 'Hassium'
        },
        atom_mass: 270,
        position: {
            x: 9,
            y: 7,
        }
    },
    {
        atom_number: 109,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Mt',
        name: {
            ru: 'Мейтнерий',
            en: 'Meitnerium'
        },
        atom_mass: 278,
        position: {
            x: 10,
            y: 7,
        }
    },
    {
        atom_number: 110,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Ds',
        name: {
            ru: 'Дармштадтий',
            en: 'Darmstadium'
        },
        atom_mass: 281,
        position: {
            x: 11,
            y: 7,
        }
    },
    {
        atom_number: 111,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Rg',
        name: {
            ru: 'Ренгений',
            en: 'Roentgentium'
        },
        atom_mass: 281,
        position: {
            x: 12,
            y: 7,
        }
    },
    {
        atom_number: 112,
        subgroup: SUBGROUPS.transitionMetals,
        symbol: 'Cn',
        name: {
            ru: 'Коперниций',
            en: 'Copernicium'
        },
        atom_mass: 285,
        position: {
            x: 13,
            y: 7,
        }
    },
    {
        atom_number: 113,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Nh',
        name: {
            ru: 'Нихоний',
            en: 'Nihonium'
        },
        atom_mass: 286,
        position: {
            x: 14,
            y: 7,
        }
    },
    {
        atom_number: 114,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Fl',
        name: {
            ru: 'Флеровий',
            en: 'Flerovium'
        },
        atom_mass: 289,
        position: {
            x: 15,
            y: 7,
        }
    },
    {
        atom_number: 115,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Mc',
        name: {
            ru: 'Московий',
            en: 'Moscovium'
        },
        atom_mass: 289,
        position: {
            x: 16,
            y: 7,
        }
    },
    {
        atom_number: 116,
        subgroup: SUBGROUPS.postTransitionMetals,
        symbol: 'Lv',
        name: {
            ru: 'Ливерморий',
            en: 'Livermorium'
        },
        atom_mass: 293,
        position: {
            x: 17,
            y: 7,
        }
    },
    {
        atom_number: 117,
        subgroup: SUBGROUPS.halogens,
        symbol: 'Ts',
        name: {
            ru: 'Теннессин',
            en: 'Tennessine'
        },
        atom_mass: 293,
        position: {
            x: 18,
            y: 7,
        }
    },
    {
        atom_number: 118,
        subgroup: SUBGROUPS.nobleGases,
        symbol: 'Og',
        name: {
            ru: 'Оганесон',
            en: 'Oganesson'
        },
        atom_mass: 294,
        position: {
            x: 19,
            y: 7,
        }
    },

]
