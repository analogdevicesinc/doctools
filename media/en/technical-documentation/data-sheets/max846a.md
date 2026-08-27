<!-- lastmod 2022-08-03 -->
<!-- image -->

<!-- image -->

## Cost-Saving Multichemistry Battery-Charger System

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX846A is a cost-saving multichemistry batterycharger system that comes in a space-saving 16-pin QSOP. This integrated system allows different battery chemistries (Li-Ion, NiMH or NiCd cells) to be charged using one circuit.

In  its  simplest  application,  the  MAX846A is a standalone, current-limited float voltage source that charges Li-Ion cells. It  can  also  be  paired  up  with  a  low-cost microcontroller (µC) to build a universal charger capable of charging Li-Ion, NiMH, and NiCd cells.

An internal 0.5%-accurate reference allows safe charging of Li-Ion cells that require tight voltage accuracy. The voltage- and current-regulation loops used to control  a  low-cost  external  PNP transistor (or P-channel MOSFET) are independent of each other, allowing more flexibility in the charging algorithms.

The MAX846A has a built-in 1%, 3.3V, 20mA linear regulator capable of powering the µC and providing a reference for the µC's analog-to-digital converters. An on-board reset notifies the controller upon any unexpected loss of power. The µC can be inexpensive, since its only functions are to monitor the voltage and current and to change the charging algorithms.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Li-Ion Battery Packs

Desktop Cradle Chargers

Li-Ion/NiMH/NiCd Multichemistry Battery

Chargers

Cellular Phones

Notebook Computers

Hand-Held Instruments

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

- ' Multichemistry Charger System (Li-Ion, NiMH, NiCd)
- ' Independent Voltage and Current Loops
- ' ±0.5% Internal Reference for Li-Ion Cells
- ' Lowers Cost:
- -Stands Alone or Uses Low-Cost µC
- -Built-In 1% Linear Regulator Powers µC
- -Linear Regulator Provides Reference to µC ADCs
- -Built-In µC Reset
- -Controls Low-Cost External PNP Transistor or P-Channel MOSFET
- ' Space-Saving 16-Pin QSOP
- ' Charging-Current-Monitor Output
- ' &lt;1µA Battery Drain when Off

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART       | TEMP. RANGE    | PIN-PACKAGE   |
|------------|----------------|---------------|
| MAX846AC/D | 0°C to +70°C   | Dice*         |
| MAX846AEEE | -40°C to +85°C | 16 QSOP       |

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## Cost-Saving Multichemistry Battery-Charger System

## ABSOLUTE MAXIMUM RATINGS

| DCIN, DRV, CS+, CS-, BATT to GND........................-0.3V,                               | +21V                                                                                     |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| PGND to GND.....................................................................±0.3V        |                                                                                          |
| VL to                                                                                        | GND......................................................................-0.3V, 7V       |
| I PWROK ................................................................................10mA |                                                                                          |
| PWROK, ISET, CCI, CCV, OFFV, VSET, CELL2, ON to                                              | GND............................................-0.3V, VL + 0.3V                          |
| CS+ to                                                                                       | CS-..........................................................................±0.3V       |
| VL Short to                                                                                  | GND.........................................................Continuous                   |
| I DRV                                                                                        | ...................................................................................100mA |

| Continuous Power Dissipation (T A = +70°C) QSOP (derate 8.3mW/°C above +70°C)........................667mW   |
|--------------------------------------------------------------------------------------------------------------|
| Operating Temperature Range                                                                                  |
| MAX846AEEE ....................................................-40°C to +85°C                                |
| Junction Temperature......................................................+150°C                             |
| Storage Temperature Range.............................-65°C to +160°C                                        |
| Lead Temperature (soldering, 10sec) .............................+300°C                                      |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VDCIN = 10V, ON = VL, IVL = IVSET = 0mA, VCS- = VCS+ = 10V, VBATT = 4.5V, VOFFV = VCELL2 = 0V, TA = 0°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                          | CONDITIONS                                             | MIN   |   TYP | MAX   | UNITS   |
|------------------------------------|--------------------------------------------------------|-------|-------|-------|---------|
| VL REGULATOR                       |                                                        |       |       |       |         |
| DCIN Supply Current                | V DCIN = 20V, I DRV = I VL = 0mA                       |       |       | 5     | mA      |
| Operating Range                    |                                                        | 3.7   |       | 20.0  | V       |
| Output Voltage                     | 0mA < I VL < 20mA, 3.7V < V DCIN < 20V                 | 3.267 | 3.305 | 3.333 | V       |
| Short-Circuit Current Limit        | VL = GND                                               |       |    50 |       | mA      |
| PWROK Trip Level                   | Rising VL edge, 2% hysteresis                          | 2.9   |   3.0 | 3.1   | V       |
| VL Undervoltage-Lockout Level      |                                                        | 2.5   |       | 2.9   | V       |
| REFERENCE                          |                                                        |       |       |       |         |
| Output Voltage                     | Measured at VSET, I VSET = 0mA, V ON = 0V              | -0.5% | 1.650 | +0.5% | V       |
| Output Resistance                  |                                                        | -2%   |    20 | +2%   | k Ω     |
| CURRENT-SENSE AMPLIFIER            |                                                        |       |       |       |         |
| Transconductance                   | V ISET = 1.7V, V CS+ - V CS- = 165mV                   | 0.95  |     1 | 1.05  | mA/V    |
| Output Offset Current              | V CS+ = 4V                                             |       |       | 3     | m A     |
| Input Common-Mode Range            | Measured at V CS- , V CS+ - V CS- = 165mV              | 2.1   |       | 20.0  | V       |
| Maximum Differential Input Voltage | V CS- = V ISET = 2.1V, CSA transconductance >0.9mA/V   | 225   |       |       | mV      |
| CS- Lockout Voltage                | When V CS- is less than this voltage, DRV is disabled. | 1.9   |       | 2.1   | V       |
| CS+, CS- Input Current             | V CS+ = 20V, V CS+ -V CS- = 165mV                      |       |       | 250   | m A     |
| CS+, CS- Off Input Current         | DCIN = VL = ON = GND                                   |       |  0.01 | 10    | m A     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Cost-Saving Multichemistry Battery-Charger System

## ELECTRICAL CHARACTERISTICS (continued)

(VDCIN = 10V, ON = VL, IVL = IVSET = 0mA, VCS- = VCS+ = 10V, VBATT = 4.5V, VOFFV = VCELL2 = 0V, TA = 0°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                    | CONDITIONS                                                      | MIN    |   TYP | MAX    | UNITS   |
|------------------------------|-----------------------------------------------------------------|--------|-------|--------|---------|
| VOLTAGE LOOP                 |                                                                 |        |       |        |         |
| Voltage-Loop Set Point       | V VSET = 1.650V, V CELL2 = 0V, I DRV = 1mA, V DRV = 10V         | -0.25% |   4.2 | +0.25% | V       |
| Voltage-Loop Set Point       | MAX846A V VSET = 1.650V, V CELL2 = VL, I DRV = 1mA, V DRV = 10V | -0.25% |   8.4 | +0.25% | V       |
| VSET Common-Mode Input Range |                                                                 | 1.25   |       | 2.0    | V       |
| CCV Output Impedance         |                                                                 |        |   150 |        | k Ω     |
| Voltage-Loop Load Regulation | 1mA < I DRV < 5mA                                               |        |  0.05 |        | %       |
| BATT Input Current           | V BATT = 10V, CELL2 = GND or VL                                 |        |       | 225    | m A     |
| BATT Off Input Current       | V BATT = 10V, ON = GND, CELL2 = GND or VL                       |        |  0.01 | 1      | m A     |
| CURRENT LOOP                 |                                                                 |        |       |        |         |
| Current-Loop Set Point       | I DRV = 5mA, V DRV = 10V                                        | 1.634  | 1.650 | 1.666  | V       |
| CA Voltage Gain              |                                                                 |        |     5 |        | V/V     |
| CCI Output Impedance         |                                                                 |        |    50 |        | k Ω     |
| Overcurrent Trip Level       | When V ISET exceeds this voltage, DRV current is disabled.      | 1.90   |       | 2.1    | V       |
| DRIVER                       |                                                                 |        |       |        |         |
| DRV Sink Current             | V DRV = 3V                                                      | 20     |       |        | mA      |
| DRV Off Current              | V DRV = 20V, V ON = 0V                                          |        |   0.1 | 100    | m A     |
| LOGIC INPUTS AND OUTPUTS     |                                                                 |        |       |        |         |
| Input High Level             | CELL2, ON, OFFV                                                 | 2.4    |       | VL     | V       |
| Input Low Level              | CELL2, ON, OFFV                                                 | 0      |       | 0.8    | V       |
| Input Current                | CELL2, ON, OFFV                                                 |        |  0.01 | 1      | m A     |
| PWROK Output Low Level       | I PWROK = 1mA, V DCIN = V VL = 2.5V                             |        |       | 0.4    | V       |
| PWROK Output High Leakage    | V PWROK = 3.3V                                                  |        |  0.01 | 1      | m A     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Cost-Saving Multichemistry Battery-Charger System

## ELECTRICAL CHARACTERISTICS (Note 1)

(VDCIN = 10V, ON = VL, IVL = IVSET = 0mA, VCS- = VCS+ = 10V, VBATT = 4.5V, VOFFV = VCELL2 = 0V, TA = -40°C to +85°C, unless otherwise noted.)

| PARAMETER                     | CONDITIONS                                                      | MIN    |   TYP | MAX    | UNITS   |
|-------------------------------|-----------------------------------------------------------------|--------|-------|--------|---------|
| VL REGULATOR                  |                                                                 |        |       |        |         |
| DCIN Supply Current           | V DCIN = 20V, I DRV = I VL = 0mA                                |        |       | 5      | mA      |
| Output Voltage                | 0mA < I VL < 20mA, 3.7V < V DCIN < 20V                          | 3.259  |       | 3.341  | V       |
| PWROK Trip Level              | Rising VL edge, 2% hysteresis                                   | 2.9    |       | 3.1    | V       |
| VL Undervoltage-Lockout Level |                                                                 | 2.5    |       | 3.0    | V       |
| REFERENCE                     |                                                                 |        |       |        |         |
| Output Voltage                | Measured at VSET, I VSET = 0mA, V ON = 0V                       | -0.7%  | 1.650 | +0.7%  | V       |
| Output Resistance             |                                                                 | -2%    |    20 | +2%    | k W     |
| CURRENT-SENSE AMPLIFIER       |                                                                 |        |       |        |         |
| Transconductance              | V ISET = 1.7V, V CS+ - V CS- = 165mV                            | 0.93   |       | 1.07   | mA/V    |
| Output Offset Current         | V CS+ = 4V                                                      |        |       | 5      | m A     |
| CS+, CS- Off Input Current    | V ON = 0V, V CS+ = V CS- = 10V                                  |        |       | 10     | m A     |
| VOLTAGE LOOP                  |                                                                 |        |       |        |         |
| Voltage-Loop Set Point        | MAX846A V VSET = 1.650V, V CELL2 = 0V, I DRV = 1mA, V DRV = 10V | -0.35% |   4.2 | +0.35% | V       |
| Voltage-Loop Set Point        | V VSET = 1.650V, V CELL2 = VL, I DRV = 1mA, V DRV = 10V         | -0.35% |   8.4 | +0.35% | V       |
| BATT Off Input Current        | V BATT = 10V, ON = GND, CELL2 = GND or VL                       |        |       | 1      | m A     |
| CURRENT LOOP                  |                                                                 |        |       |        |         |
| Current-Loop Set Point        | I DRV = 5mA, V DRV = 10V                                        | 1.625  |       | 1.675  | V       |
| Overcurrent Trip Level        | When V ISET exceeds this voltage, DRV current is disabled.      | 1.86   |       | 2.14   | V       |
| DRIVER                        |                                                                 |        |       |        |         |
| DRV Sink Current              | V DRV = 3V                                                      | 20     |       |        | mA      |
| DRV Off Current               | V DRV = 20V , ON = GND                                          |        |       | 100    | m A     |

Note 1: Specifications to -40°C are guaranteed by design and not production tested.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Cost-Saving Multichemistry Battery-Charger System

<!-- image -->

## Cost-Saving Multichemistry Battery-Charger System

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

|   PIN | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | DCIN   | Supply Input from External DC Source. 3.7V ≤ V DCIN ≤ 20V.                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     2 | VL     | 3.3V, 20mA, 1% Linear-Regulator Output. VL powers the system µC and other components. Bypass to GND with a 4.7µF tantalum or ceramic capacitor.                                                                                                                                                                                                                                                                                                                                    |
|     3 | CCI    | Current-Regulation-Loop Compensation Pin. Connect a compensation capacitor (typically 10nF) from CCI to VL.                                                                                                                                                                                                                                                                                                                                                                        |
|     4 | GND    | Ground                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     5 | CCV    | Voltage-Regulation-Loop Compensation Pin. Connect a compensation capacitor (typically 10nF) from CCV to VL.                                                                                                                                                                                                                                                                                                                                                                        |
|     6 | VSET   | Float-Voltage Reference-Adjust Input. Leave VSET open for a 4.2V default. See the Applications Information section for adjustment information.                                                                                                                                                                                                                                                                                                                                     |
|     7 | ISET   | Current-Set Input/Current-Monitor Output. ISET sets the current-regulation point. Connect a resistor from ISET to GND to monitor the charging current. ISET voltage is regulated at 1.65V by the current- regulation loop. To adjust the current-regulation point, either modify the resistance from ISET to ground or connect a fixed resistor and adjust the voltage on the other side of the resistor (Figure 5). The transconductance of the current-sense amplifier is 1mA/V. |
|     8 | OFFV   | Logic Input that disables the voltage-regulation loop. Set OFFV high for NiCd or NiMH batteries.                                                                                                                                                                                                                                                                                                                                                                                   |
|     9 | PWROK  | Open-Drain, Power-Good Output to µC. PWROK is low when VL is less than 3V. The reset timeout peri- od can be set externally using an RC circuit (Figure 3).                                                                                                                                                                                                                                                                                                                        |
|    10 | CELL2  | Digital Input. CELL2 programs the number of Li-Ion cells to be charged. A high level equals two cells; a low level equals one cell.                                                                                                                                                                                                                                                                                                                                                |
|    11 | ON     | Charger ON/OFF Input. When low, the driver section is turned off and I BATT <1µA. The VL regulator is always active.                                                                                                                                                                                                                                                                                                                                                               |
|    12 | BATT   | Battery Input. Connect BATT to positive battery terminal.                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    13 | CS+    | Current-Sense Amplifier High-Side Input. Connect CS+ to the sense resistor's power-source side. The sense resistor may be placed on either side of the pass transistor.                                                                                                                                                                                                                                                                                                            |
|    14 | CS-    | Current-Sense Amplifier Low-Side Input. Connect CS- to the sense resistor's battery side.                                                                                                                                                                                                                                                                                                                                                                                          |
|    15 | PGND   | Power Ground                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    16 | DRV    | External Pass Transistor (P-channel MOSFET or PNP) Base/Gate Drive Output. DRV sinks current only.                                                                                                                                                                                                                                                                                                                                                                                 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX846A battery-charging controller combines three functional blocks: a 3.3V precision, low-dropout linear  regulator  (LDO),  a  precision  voltage  reference, and a voltage/current regulator (Figure 1).

## Linear Regulator

The LDO regulator output voltage (VL) is two times the internal reference voltage; therefore, the reference and LDO track. VL delivers up to 20mA to an external load and is short-circuit protected. The power-good output (PWROK) provides microcontroller (µC) reset and charge-current inhibition.

## Voltage Reference

The precision internal reference provides a voltage to accurately set the float voltage for lithium-ion (Li-Ion) battery charging. The reference output connects in series with an internal, 2%-accurate, 20k Ω resistor. This allows the float voltage to be adjusted using one external 1% resistor (RVSET) to form a voltage divider (Figure 4).  The  float-voltage  accuracy  is  important  for battery life and to ensure full capacity in Li-Ion batteries. Table 1 shows the accuracies attainable using the MAX846A.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Cost-Saving Multichemistry Battery-Charger System

## Voltage/Current Regulator

The voltage/current regulator consists of a precision attenuator, voltage loop, current-sense amplifier, and current loop. The attenuator can be pin programmed to set  the  regulation  voltage  for  one  or  two  Li-Ion  cells (4.2V and 8.4V, respectively). The current-sense amplifier  is  configured  to  sense  the  battery  current  on  the high side. It is, in essence, a transconductance amplifier  converting the voltage across an external sense resistor (RCS) to a current, and applying this current to an external load resistor (RISET). Set the charge current by selecting RCS and RISET. The charge current can also be adjusted by varying the voltage at the low side of  RISET or  by  summing/subtracting current from the ISET node (Figure 5). The voltage and current loops are individually  compensated using external capacitors at CCV and CCI, respectively. The outputs of these two loops are OR'ed together and drive an open-drain, internal N-channel MOSFET transistor sinking current to ground. An external P-channel MOSFET or PNP transistor pass element completes the loop.

## Stability

The Typical Operating Characteristics show the loop gains for the current loop and voltage loop. The dominant pole for each loop is set by the compensation capacitor connected to each capacitive compensation pin (CCI, CCV). The DC loop gains are about 50dB for the  current  loop  and  about  33dB  for  the  voltage  loop, for a battery impedance of 250m Ω .

The CCI output impedance (50k Ω ) and the CCI capacitor determine the current-loop dominant pole. In Figure 2,  the  recommended CCCV is 10nF, which places a dominant pole at 300Hz. There is a high-frequency pole, due to the external PNP, at approximately fT/ß. This pole frequency (on the order of a few hundred kilohertz)  will  vary  with  the  type  of  PNP  used.  Connect  a 10nF capacitor between the base and emitter of the

Table 1. Float-Voltage Accuracy

| ERROR SOURCE                                                                                                                                                                                                    | ERROR   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Internal-reference accuracy                                                                                                                                                                                     | ±0.5%   |
| VSET error due to external divider. Calculated from a 2% internal 20k Ω resistor tolerance and a 1% external RVSET resistor tolerance. The total error is 3% x (adjustment). Assume max adjustment range of 5%. | ±0.15%  |
| VSET amplifier and divider accuracy                                                                                                                                                                             | ±0.25%  |
| TOTAL                                                                                                                                                                                                           | ±0.9%   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

PNP to prevent self-oscillation (due to the high-impedance base drive).

Similarly,  the  CCV  output  impedance (150k Ω )  and  the CCV capacitor set the voltage-loop dominant pole. In Figure 2, the compensation capacitance is 10nF, which places a dominant pole at 200Hz.

The battery impedance directly affects the voltage-loop DC and high-frequency gain. At DC, the loop gain is proportional to the battery resistance. At higher frequencies, the AC impedance of the battery and its connections introduces an additional high-frequency zero. A 4.7µF output capacitor in parallel with the battery, mounted close to BATT, minimizes the impact of this impedance. The effect of the battery impedance on DC gain is noticeable in the Voltage-Loop-Gain graph (see Typical Operating Characteristics). The solid line represents voltage-loop gain versus frequency for a fully charged battery, when the battery energy level is high and the ESR is low. The charging current is 100mA. The dashed line shows the loop gain with a 200mA charging current, a lower amount of stored energy in the battery, and a higher battery ESR.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Stand-Alone Li-Ion Charger

Figure 2 shows the stand-alone configuration of the MAX846A. Select the external components and pin configurations as follows:

- Program the number of cells: Connect CELL2 to GND for one-cell operation, or to VL for two-cell operation.
- Program the float voltage: Connect a 1% resistor from VSET to GND to adjust the float voltage down, or to VL to adjust it up. If  VSET is unconnected, the float voltage will be 4.2V per cell. Let the desired float voltage per cell be VF, and calculate the resistor value as follows:

## Cost-Saving Multichemistry Battery-Charger System

Figure 1.  Functional Diagram

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Cost-Saving Multichemistry Battery-Charger System

Figure 2.  Stand-Alone Li-Ion Charger

<!-- image -->

<!-- formula-not-decoded -->

where VX is either GND or VL, and VF is the per-cell float  voltage.  In  the  circuit  of  Figure  1,  RVSET is 400k Ω .  RVSET and the internal 20k Ω resistor  form  a divider, resulting in an adjustment range of approximately ±5%.

The current-regulation loop attempts to maintain the voltage on ISET at 1.65V. Selecting resistor RISET determines the reflected voltage required at the currentsense amplifier input.

<!-- image -->

- Calculate RCS and RISET as follows: RCS = VCS / IBATT RISET (in k Ω ) = 1.65V / VCS

where the recommended value for VCS is 165mV.

- Connect ON to PWROK to prevent the charge current from turning on until the voltages have settled.

Minimize power dissipation in the external pass transistor. Power dissipation can be controlled by setting the DCIN input supply as low as possible, or by making VDCIN track the battery voltage.

## Microprocessor-Controlled Multichemistry Operation

The MAX846A is highly adjustable, allowing for simple interfacing with a low-cost µC to charge Ni-based and Li-Ion batteries using one application circuit (Figure 3).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Cost-Saving Multichemistry Battery-Charger System

Figure 3.  Desktop Multichemistry Charger Concept

<!-- image -->

Component selection is similar to that of stand-alone operation. By using DACs or µC PWM outputs, the float voltage and charging current can be adjusted by the µC. When a Ni-based battery is being charged, disable the  float-voltage  regulation  using  the  OFFV  input.  The µC can also monitor the charge current through the battery by reading the ISET output's voltage using its ADC. Similarly, the battery voltage can be measured using a voltage divider from the battery.

Note that the µC only needs to configure the system for correct voltage and current levels for the battery being charged, and for Ni-based batteries to detect end-ofcharge and adjust the current level to trickle. The controller is not burdened with the regulation task.

Float-voltage accuracy is important for battery life and for  reaching full  capacity  for  Li-Ion  batteries.  Table  1 shows the accuracy attainable using the MAX846A.

For best float-voltage accuracy, set the DRV current to 1mA (RDRV = 660 Ω for a PNP pass transistor).

## High-Power Multichemistry Offline Charger

The circuit in Figure 6 minimizes power dissipation in the pass transistor by providing optical feedback to the input power source. The offline AC/DC converter maintains  1.2V  across the PNP. This allows much higher charging currents than can be used with conventional power sources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Cost-Saving Multichemistry Battery-Charger System

<!-- image -->

Figure 4.  VSET Adjustment Methods

<!-- image -->

Figure 5.  ISET Adjustment Methods

<!-- image -->

Figure 6.  Low-Cost Desktop Multichemistry Charger Concept

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX846A

## Cost-Saving Multichemistry Battery-Charger System

<!-- image -->

SUBSTRATE CONNECTED TO GND TRANSISTOR COUNT: 349

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600