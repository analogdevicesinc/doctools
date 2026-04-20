<!-- lastmod 2025-12-08 -->
<!-- image -->

## DESCRIPTION

## RH3845MK DICE Radiation Hardened High Voltage Synchronous Step-Down Controller

## ABSOLUTE MAXIMUM RATINGS

The RH3845MK is a high voltage, synchronous, current mode controller for medium to high power , high efficiency supplies. It  offers  a  wide  4V  to  60V  input  range  (7.5V minimum start-up voltage). An onboard regulator simplifies  the  biasing  requirements by providing IC power directly from V IN .

Additional features include an adjustable fixed operating frequency synchronizable to an external clock for noise sensitive  applications,  gate  drivers  capable  of  driving large  N-channel  MOSFETs,  a  precision  undervoltage lockout, low shutdown current, short-circuit protection, and a programmable soft-start. Note that Burst Mode ® operation, available in the L T3845, is not available in the RH3845 version.

## DICE PINOUT

113mils × 124mils,

<!-- image -->

Backside Metal: Alloyed Gold Layer Backside Potential: GND

| (Note 1)                                                                             |
|--------------------------------------------------------------------------------------|
| V IN ............................................................................65V |
| BOOST......................................................................80V       |
| BOOST to SW............................................................24V           |
| V CC , MODE................................................................24V       |
| SENSE + , SENSE - .......................................................40V         |
| SENSE + TO SENSE - ..................................................±1V             |
| SYNC, V FB , AND C SS ...................................................5V          |
| SHDN Pin Current ....................................................1mA             |
| Operating Junction Temperature Range...-55°C to 125°C                                |
| Storage Temperature Range................... -65°C to 150°C                          |

All registered trademarks and trademarks are the property of their respective owners.

## PAD FUNCTION

|   1. | V IN   |   11. | GND     |
|------|--------|-------|---------|
|    2 | SHDN   |    12 | SENSE - |
|    3 | C SS   |    13 | SENSE + |
|    4 | MODE   |    14 | PGND    |
|    5 | V FB   |    15 | BG      |
|    6 | V C    |    16 | V CC    |
|    7 | SYNC   |    17 | SW      |
|    8 | f SET  |    18 | TG      |
|    9 | GND    |    19 | BOOST   |
|   10 | GND    |    20 | GND     |

## DIE CROSS REFERENCE

| LTC ® Finished Part Number   | Order Part Number           |
|------------------------------|-----------------------------|
| RH3845MK RH3845MK            | RH3845MK DICE RH3845MK DWF* |

Please refer to LTC standard product data sheet for other applicable product information.

*DWF = DICE in wafer form.

## TABLE 1: DICE/DWF ELECTRICAL TEST LIMITS

Specifications are at T A  = 25°C, V IN  = 20V ,

VCC  = BOOST = 10V , SHDN = 2V , R SET  = 49.9kΩ, SENSE -  = SENSE +  = 10V , SGND = PGND, SW = 0V .

| PARAMETER                            | CONDITIONS       | MIN   | TYP   | MAX   | UNITS   |
|--------------------------------------|------------------|-------|-------|-------|---------|
| V IN Minimum Start Voltage (Note 2)  |                  |       |       | 7.5   | V       |
| V IN UVLO Threshold (Falling)        |                  | 3.6   |       | 4.0   | V       |
| V IN Supply Current                  | V CC > 9V        |       |       | 200   | μA      |
| V IN Shutdown Current                | V SHDN = 0.3V    |       |       | 100   | μA      |
| BOOST Supply Current (Note 3)        |                  |       |       | 2     | mA      |
| V CC Supply Current                  |                  |       |       | 4.5   | mA      |
| SHDN Enable Threshold (Rising)       |                  | 1.30  |       | 1.40  | V       |
| Reference Voltage                    |                  | 1.214 |       | 1.250 | V       |
| V FB Input Bias Current              |                  |       |       | ±100  | nA      |
| V FB Error Amp Transconductance      |                  | 350   |       |       | µS      |
| Error Amp Sink/Source Current        |                  | 35    |       |       | µA      |
| MODE Pin Current (Note 4)            |                  |       |       | 2     | µA      |
| Peak Current Limit Sense Voltage     |                  | 90    |       | 120   | mV      |
| Soft-Start Charge Current            |                  | 8     |       | 14    | µA      |
| Sense Pins Common-Mode Range         |                  | 0     |       | 36    | V       |
| Sense Pins Input Current             | V SENSE(CM) > 4V |       |       | 400   | µA      |
| Reverse Protect Sense Voltage        | V MODE = 7.5V    |       |       | 120   | mV      |
| Reverse Current Sense Voltage Offset | V MODE = V FB    |       |       | 20    | mV      |
| Switching Frequency                  | R T = 49.9k      | 270   |       | 360   | kHz     |
| Programmable Frequency Range         |                  | 100   |       | 500   | kHz     |

## DICE/DWF SPECIFICATION

## (Pre-Irradiation) Specifications are at T A  = 25°C, V IN  = 20V , TABLE 2: ELECTRICAL CHARACTERISTICS

VCC  = BOOST = 10V , SHDN = 2V , R SET  = 49.9kΩ, SENSE -  = SENSE +  = 10V , SGND = PGND, SW = 0V .

| PARAMETER                            | CONDITIONS           |   SUB- GROUP | MIN   | T A = 25°C TYP   | MAX   | SUB- GROUP   | -55°C MIN   | ≤ T A ≥ TYP   | 125°C MAX   | UNITS   |
|--------------------------------------|----------------------|--------------|-------|------------------|-------|--------------|-------------|---------------|-------------|---------|
| V IN Minimum Start Voltage (Note 2)  |                      |            1 |       |                  | 7.5   | 2, 3         |             |               | 7.5         | V       |
| V IN UVLO Threshold (Falling)        |                      |            1 | 3.6   | 3.8              | 4.0   | 2, 3         | 3.6         | 3.8           | 4.0         | V       |
| V IN Supply Current                  | V CC > 9V            |            1 |       | 130              | 200   | 2, 3         |             |               | 800         | μA      |
| V IN Shutdown Current                | V SHDN = 0.3V        |            1 |       | 65               | 100   | 2, 3         |             |               | 200         | μA      |
| BOOST Supply Current (Note 3)        |                      |            1 |       | 1.4              | 2     | 2, 3         |             |               | 3.5         | mA      |
| V CC Supply Current                  |                      |            1 |       | 3.8              | 4.5   | 2, 3         |             |               | 5.5         | mA      |
| V CC Current Limit                   |                      |            1 | -40   | -150             |       | 2, 3         | -40         |               |             | mA      |
| SHDN Enable Threshold (Rising)       |                      |            1 | 1.30  | 1.35             | 1.4   | 2, 3         | 1.30        |               | 1.5         | V       |
| SHDN Hysteresis                      |                      |            1 |       | 140              |       | 2, 3         | 100         |               | 200         | mV      |
| Reference Voltage                    |                      |            1 | 1.214 | 1.232            | 1.250 | 2, 3         | 1.214       |               | 1.250       | V       |
| V FB Input Bias Current              |                      |            1 |       | ±20              | ±100  | 2, 3         |             | ±20           |             | nA      |
| V FB Error Amp Transconductance      |                      |            1 | 350   | 450              |       | 2, 3         | 340         |               | 540         | µS      |
| Error Amp Sink/Source Current        |                      |            1 | 35    | 50               |       | 2, 3         | 20          |               |             | µA      |
| Peak Current Limit Sense Voltage     |                      |            1 | 90    | 105              | 120   | 2, 3         | 85          |               | 125         | mV      |
| Soft-Start Charge Current            |                      |            1 | 8     | 12               | 14    | 2, 3         | 8           |               | 16          | µA      |
| Sense Pins Common-Mode Range         |                      |            1 | 0     |                  | 36    | 2, 3         | 0           |               | 36          | V       |
| Sense Pins Input Current             | V SENSE(CM) > 4V     |            1 |       | 320              | 400   | 2, 3         |             |               | 500         | µA      |
| Reverse Protect Sense Voltage        | V MODE = 7.5V        |            1 |       | 108              | 120   | 2, 3         |             |               | 140         | mV      |
| Reverse Current Sense Voltage Offset | V MODE = V FB        |            1 |       | 15               | 20    | 2, 3         |             |               | 25          | mV      |
| Switching Frequency                  | R T = 49.9k          |            1 | 270   | 300              | 360   | 2, 3         | 240         |               | 390         | kHz     |
| Programmable Frequency Range         |                      |            1 | 100   |                  | 500   | 2, 3         | 100         |               | 500         | kHz     |
| External Sync Frequency Range        |                      |            1 | 100   |                  | 600   | 2, 3         | 100         |               | 600         | kHz     |
| Non-Overlap Time TG to BG            |                      |            1 |       | 250              |       | 2, 3         |             |               |             | ns      |
| Non-Overlap Time BG to TG            |                      |            1 |       | 250              |       | 2, 3         |             |               |             | ns      |
| TG Minimum On-Time                   |                      |            1 |       | 400              |       | 2, 3         |             |               |             | ns      |
| TG Minimum Off-Time                  |                      |            1 |       | 300              |       | 2, 3         |             |               |             | ns      |
| TG, BG Drive On Voltage              | V CC = 10V           |            1 | 8     | 8.75             |       | 2, 3         | 8           |               |             | V       |
| TG, BG Drive Off Voltage             |                      |            1 |       |                  | 0.1   | 2, 3         |             |               | 0.1         | V       |
| TG, BG Drive Rise Time               | C TG = C BG = 3300pF |            1 |       | 45               |       | 2, 3         |             |               |             | ns      |
| TG, BG Drive Fall Time               | C TG = C BG = 3300pF |            1 |       | 45               |       | 2, 3         |             |               |             | ns      |

<!-- image -->

## (Post-Irradiation) (Note 5) Specifications are at T A  = 25°C, TABLE 3: ELECTRICAL CHARACTERISTICS

VIN  = 20V , V CC  = BOOST = 10V , SHDN = 2V , R SET  = 49.9kΩ, SENSE -  = SENSE +  = 10V , SGND = PGND, SW = 0V .

| PARAMETER                            | CONDITIONS           | 10KRADS MIN   | (Si) MAX   | 20KRADS MIN   | (Si) MAX   | 50KRADS (Si) MIN MAX   | 100KRADS MIN   | (Si) MAX   | 200KRADS MIN   | (Si) MAX   | UNITS   |
|--------------------------------------|----------------------|---------------|------------|---------------|------------|------------------------|----------------|------------|----------------|------------|---------|
| V IN Minimum Start Voltage (Note 2)  |                      |               | 7.5        |               | 7.5        | 7.5                    |                | 7.5        | 7.5            |            | V       |
| V IN UVLO Threshold (Falling)        |                      |               | 4          | 4             |            | 4                      |                | 4          | 4              |            | V       |
| V IN Supply Current                  | V CC > 9V            |               | 200        |               | 200        | 200                    |                | 200        |                | 200        | μA      |
| V IN Shutdown Current                | V SHDN = 0.3V        |               | 100        |               | 100        | 100                    |                | 100        |                | 100        | μA      |
| BOOST Supply Current (Note 3)        |                      |               | 2          | 2             |            | 2                      |                | 2          |                | 2          | mA      |
| V CC Supply Current                  |                      |               | 4.5        |               | 4.5        | 4.5                    |                | 4.5        |                | 4.5        | mA      |
| V CC Current Limit                   |                      | -40           |            | -40           |            | -40                    | -40            |            | -40            |            | mA      |
| SHDN Enable Threshold (Rising)       |                      | 1.30          | 1.5        | 1.30          | 1.5        | 1.30 1.5               | 1.30           | 1.5        | 1.30           | 1.5        | V       |
| SHDN Hysteresis                      |                      | 100           | 180        | 100           | 180        | 100 180                | 100            | 180        | 80             | 180        | mV      |
| Reference Voltage                    |                      | 1.214         | 1.250      | 1.210         | 1.246      | 1.208 1.244            | 1.204          | 1.240      | 1.187          | 1.223      | V       |
| V FB Input Bias Current              |                      |               | ±100       |               | ±150       | ±170                   |                | ±300       |                | ±400       | nA      |
| V Error Amp Transconductance         |                      | 350           |            | 330           |            | 300                    | 280            |            | 250            |            | µS      |
| FB Error Amp Sink/Source Current     |                      | 35            |            | 35            |            | 35                     | 35             |            | 30             |            | µA      |
| Peak Current Limit Sense Voltage     |                      | 90            | 120        | 85            | 120        | 85 120                 | 80             | 120        | 75             | 120        | mV      |
| Soft-Start Charge Current            |                      | 8             | 16         | 8             | 16         | 6 16                   | 5              | 16         | 4              | 16         | µA      |
| Sense Pins Common-Mode Range         |                      |               | 36         |               | 36         | 36                     |                | 36         |                | 36         | V       |
| Sense Pins Input Current             | V SENSE(CM) > 4V     |               | 400        |               | 400        | 400                    |                | 400        |                | 400        | µA      |
| Reverse Protect Sense Voltage        | V MODE = 7.5V        |               | 120        |               | 120        | 120                    |                | 120        |                | 120        | mV      |
| Reverse Current Sense Voltage Offset | V MODE = V FB        |               | 20         |               | 20         | 20                     |                | 20         |                | 20         | mV      |
| Switching Frequency                  | R T = 49.9k          | 270           | 370        | 270           | 370        | 270 370                | 270            | 370        | 270            | 370        | kHz     |
| Programmable Frequency Range         |                      | 100           | 500        | 100           | 500        | 100 500                | 100            | 500        | 100            | 500        | kHz     |
| Non-Overlap Time TG to BG            |                      |               | 350        |               | 350        | 350                    |                | 350        |                | 350        | ns      |
| Non-Overlap Time BG to TG            |                      |               | 350        |               | 350        | 350                    |                | 350        |                | 350        | ns      |
| TG Minimum On-Time                   |                      |               | 500        |               | 500        | 500                    |                | 500        |                | 500        | ns      |
| TG Minimum Off-Time                  |                      |               | 350        |               | 350        | 350                    |                | 360        |                | 360        | ns      |
| TG, BG Drive On Voltage              | V CC = 10V           | 8             |            | 8             |            | 8                      | 8              |            | 8              |            | V       |
| TG, BG Drive Off Voltage             |                      |               | 0.1        |               | 0.1        | 0.1                    | 0.1            |            |                | 0.1        | V       |
| TG, BG Drive Rise Time               | C TG = C BG = 3300pF |               | 60         |               | 60         | 60                     |                | 60         |                | 60         | ns      |
| TG, BG Drive Fall Time               | C TG = C BG = 3300pF |               | 60         |               | 60         | 60                     | 60             |            |                | 60         | ns      |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability.

Note 2: V IN  voltages below the start-up threshold (7.5V) are only supported when the V CC  is externally driven above 6.5V .

Note 3: Supply current specification does not include switch drive currents. Actual supply currents will be higher .

Note 4: Connect the MODE pin to V FB  for pulse-skipping mode or V CC for forced continuous mode. Burst Mode operation is not available in the RH3845 version of this part.

Note 5: Device is characterized to 10Krad, 20Krad, 50Krad, 100Krad, and 200Krad and is production tested at 100Krad only.

## TOTAL DOSE BIAS CIRCUIT - RUN MODE

<!-- image -->

## TOTAL DOSE BIAS CIRCUIT - SHUTDOWN MODE

<!-- image -->

## BURN-IN CIRCUIT - RUN MODE

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

<!-- image -->

Rad Hard die require special handling as compared to standard IC chips.

Rad Hard die are susceptible to surface damage because there is no silicon nitride passivation as on standard die. Silicon nitride protects the die surface from scratches by its hard and dense properties. The passivation on Rad Hard die is silicon dioxide that is much 'softer' than silicon nitride.

LTC recommends that die handling be performed with extreme care so as to protect the die surface from scratches. If the need arises to move the die around from the chip tray, use a Teflon-tipped vacuum wand.

<!-- image -->

This wand can be made by pushing a small diameter Teflon tubing onto the tip of a steel-tipped wand. The inside diameter of the Teflon tip should match the die size for efficient pickup. The tip of the Teflon should be cut square and flat to ensure good vacuum to die surface. Ensure the Teflon tip remains clean from debris by inspecting under stereoscope.

During die attach, care must be exercised to ensure no tweezers touch the top of the die.

Wafer level testing is performed per the indicated specifications for dice. Considerable differences in performance can often be observed for dice versus packaged units due to the influences of packaging and assembly on certain devices and/or parameters. Please consult factory for more information on dice performance and lot qualifications via lot sampling test procedures.

Dice data sheet subject to change. Please consult factory for current revision in production.

## DICE/DWF SPECIFICATION

## REVISION HISTORY

(Revision history begins at Rev C)

| REV   | DATE   | DESCRIPTION                                                                                                                                         | PAGE NUMBER   |
|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| C     | 09/16  | Removed V CC Current Limit, corrected Reverse Current Sense Voltage Offset from 10mV to 20mV, corrected FB Bias Current from maximum 50nA to ±100nA | 2, 3, 4       |
| D     | 11/25  | Updated to Analog Devices format Changes to Table 3: Electrical Characteristics Deleted Table 4: Electrical Test Requirements                       | Global 4 4    |

<!-- image -->