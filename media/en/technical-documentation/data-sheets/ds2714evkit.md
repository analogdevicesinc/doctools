<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## INTRODUCTION

The DS2714 evaluation kit (EV kit) displays all features of the DS2714 NiMH charger. The board is set up to be used with an external current source as the charge supply. The fast-charge timeout is set for 2.5hrs. DMSEL is floating, and V CTST is set to approximately 296mV.

## CONNECTIONS

GND should be connected to a common ground between VDD and VCHG. VDD supplies power to the DS2714 and LEDs. VCHG supplies the current for charging the cells. VDD and VCHG must be separate supplies. The loading of VCHG causes the voltage to drop out, resulting in a reset of the DS2714 if one supply is used to power both the DS2714 and VCHG.

## ORDERING INFORMATION

+ Denotes lead(Pb)-free and RoHS compliant.

| PART         | TYPE   |
|--------------|--------|
| DS2714EVKIT+ | EV Kit |

## EVALUATION BOARD SCHEMATIC

<!-- image -->

GND

## DS2714EVKIT+ Quad Loose-Cell NiMH Charger

## Evaluation Kit

## SUPPLY CONNECTION DIAGRAM

<!-- image -->

## FAST CHARGE TIME AND TOP-OFF TIME ADJUSTMENT

Fast Charge and Top-Off time are controlled by the external resistor R21. Resistors can be selected to support Fast Charge timeout periods of 0.5hrs to 10hrs. Top-Off charge timeout is one-half of Fast Charge timeout. The programmed charge time approximately follows the equation:

t = 1.5 x R/1000 (time in minutes)

The evaluation board value of R21 is 100K  giving a Fast Charge timeout of 150 minutes, 2.5hrs.

## CELL TEST VOLTAGE ADJUSTMENT

VCTST is controlled by the external resistor R20. Resistors can be selected to support CTST values from 32mV to 400mV. The programmed CTST value approximately follows the equation:

VCTST = 8000/R  (value in volts)

The evaluation board value of R20 is 27k  giving CTST a value of approximately 296mV.

## CELL TEST VOLTAGE VALUE

CTST values should be selected based on cell impedance and charge rate. You will want to select a CTST value that will allow the DS2714 to reject an Alkaline cell but charge an empty NiMH. The following formula shows the relationship between charge rate, CTST, and cell impedance:

## VCTST = (Charge Rate) x (Cell Impedance)

Using a charge rate of 2A assuming a cell impedance of 52m  will  give  you  a  V CTST =  104mV. This can be a delicate selection process because some aged NiMH cells can have an impedance greater than new Alkaline cells. The following table shows the impedance value of a few typical cells.

| CELL TYPE   | CELL BRAND             | CHARGE STATES IMPEDANCE (M    | CHARGE STATES IMPEDANCE (M    | CHARGE STATES IMPEDANCE (M    | CHARGE STATES IMPEDANCE (M    |
|-------------|------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| CELL TYPE   | CELL BRAND             | FULL                            | LOW                             | EMPTY                           | DEPLETED                        |
| Alkaline    | Duracell Ultra         | 181                             | 451                             | 910                             | 671                             |
| Alkaline    | Rayovac Maximum Plus   | 248                             | 761                             | 1282                            | 462                             |
| Alkaline    | Energizer Max          | 140                             | 912                             | 1080                            | 524                             |
| Alkaline    | Energizer e 2 Lithium  | 159                             | 174                             | 272                             | 850                             |
| Alkaline    | Energizer e 2 Titanium | 186                             | 436                             | 486                             | 444                             |
| New NiMH    | Panasonic (1950mAhr)   | 42                              | 52                              | 60                              | 448                             |
| New NiMH    | Rayovac (2000mAhr)     | 40                              | 48                              | 64                              | 638                             |
| New NiMH    | Sanyo (1600mAhr)       | 34                              | 54                              | 206                             | 982                             |
| Aged NiMH   | Maxell (2000mAhr)      | 58                              | 285                             | 555                             | 629                             |
| Aged NiMH   | Rayovac (1800mAhr)     | 45                              | 55                              | 187                             | 391                             |
| Aged NiMH   | Sanyo (2000mAhr)       | 81                              | 83                              | 131                             | 812                             |
| Aged NiMH   | Sony (2000mAhr)        | 57                              | 116                             | 551                             | 1420                            |

## LED BLINK RATES

LED blink rates are controlled by the DMSEL pin. DMSEL is floating and can be shorted to VDD or GND through resistor connection pads R6 and R7, respectively.

| DISPLAY   |           | CHARGE ACTIVITY   | CHARGE ACTIVITY           | CHARGE ACTIVITY                 | CHARGE ACTIVITY   |
|-----------|-----------|-------------------|---------------------------|---------------------------------|-------------------|
| MODE      | DMSEL PIN | NO BATTERY        | PRE/FAST/TOP-OFF CHARGING | MAINTENANCE                     | FAULT             |
| Low       | High-Z    | Low               | 0.75s 0.25s               | Low High-Z 0.5s Low 0.5s High-Z | DM0               |
| Float     | High-Z    | Low               | High-Z                    | 0.125s Low 0.125 High-Z         | DM1               |
| High      | High-Z    |                   | 0.75s Low 0.25s High-Z    | Low 0.125s Low 0.125s High-Z    | DM2               |

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-----------------|----------------------------------------------------------------|-----------------|
| 8/09            | Changed the ordering part number from DS2714K to DS2714EVKIT+. | All             |