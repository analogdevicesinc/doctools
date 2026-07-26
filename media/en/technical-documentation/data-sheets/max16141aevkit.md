<!-- lastmod 2022-08-03 -->
## MAX16141A Evaluation Kit

## General Description

The  MAX16141A  evaluation  kit  (EV  kit)  is  a  complete, fully  assembled, and tested ideal diode controller circuit that  demonstrates  the  system  protection  capability  of the MAX16141A. The EV kit is designed to evaluate the MAX16141A's response to reverse current, overcurrent, input  overvoltage/undervoltage,  short  circuit,  and  overtemperature faults in  a  system. A  high-power TVS footprint provides the option to evaluate the MAX16141A EV kit's  performance  against  the  ISO-7637  and  ISO-16750 automotive-safety standards. The undervoltage and overvoltage  thresholds  are  set  to  8.6V/36.2V,  respectively. The  EV  kit  PCB  is  available  with  the  MAX16141AAAF/ VY+ Installed.

## Features

- 8.6V Undervoltage Threshold and 36.2V Overvoltage Threshold
- Optional TVS Footprint Facilitates Automotive Transients Testing
- Output Short Circuit Protection
- Proven 2-Layer 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX16141A

## Quick Start

## Required Equipment

- MAX16141A EV Kit
- 40V, 10A DC Power Supply
- 2 Digital Multimeter (DMM)
- 2-Channel Scope Oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify the board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify the shunts are installed in their respective default positions for jumpers JU1 to JU3 (Tables 1 to 3).
- 2) Connect the power supply between the IN and SYSGND terminal posts.
- 3) Connect the DMM#1 between the IN and SYSGND terminal posts, and DMM#2 between the OUT and SYSGND posts.
- 4) Connect Channel 1 probe of the oscilloscope to the GATE and Channel 2 of the Oscilloscope to the OUT of the EV kit.
- 5) Turn on the power supply.
- 6) Manually sweep the power supply from 8.6V to 36.2V. Verify the output voltage at OUT approximately follows the input voltage at IN.
- 7) Increase the input voltage to 37V.
- 8) Verify the output voltage is 0V (overvoltage protection).
- 9) Set the input voltage to 12V and verify the OUT is also about 12V.
- 10) Using an insulated shorting cable, take cautions to hold the insulated parts of the shorting cable while shorting OUT to SYSGND, and verify the gate voltage is 0V on the Channel 2 of the Oscilloscope (short circuit protection).
- 11) Remove the shorting cable between OUT and SYSGND. Verify the output voltage and gate voltage return to their correct voltage levels.
- 12) Decrease the input voltage to 7V.
- 13) Verify the output voltage is approximately 0V and the gate voltage is pulled to ground (undervoltage protection).

<!-- image -->

## Detailed Description of Hardware

The  MAX16141A  EV  kit  evaluates  the  MAX16141A, an  ideal  diode  controller  device  that  protects  systems against fault conditions such as reverse current, overcurrent,  input  overvoltage/undervoltage,  short  circuit,  and overtemperature. The MAX16141A EV kit is designed to disable the gate drive when the input voltage (VIN) moves outside of the programmed undervoltage/overvoltage window-threshold levels and when the load current exceeds the programmed current limit of 5A (typ). See Tables 1, 2, and 3 for more detail on jumpers configuration.

## Enable Input (EN)

Jumper  (JU1)  allows  connecting  the  shutdown  input ( SHDN )  of  the  MAX16141A  to  the  VCC  through  a  pullup  resistor  (R12)  for  normal  operation.  To  place  the MAX16141A  EVKIT  in  shutdown  mode,  uninstall  the JU1  and  allow  R15  (not  installed)  to  pull  the  EN  to ground. When the EN is pulled low, the gate voltage of the MAX16141A is pulled to the ground, and the Internal TERM switch disconnects from the resistive divider network connected to UVSET and OVSET. See Table 1 for the JU1 jumper settings.

## Table 1. SHDN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                                         |
|----------------------|-----------------------------------------------------|
| Installed*           | Enabled. SHDN = VCC (through pullup resistor R12)   |
| Not Installed        | Disabled. SHDN = SYSGND (through internal pulldown) |

## Table 2. SLEEP (JU2)

| JU2 SHUNT POSITION   | DESCRIPTION                         |
|----------------------|-------------------------------------|
| Installed            | SLEEP (pullup through resistor R13) |
| Not Installed*       | SLEEP (pulldown through R16)        |

## Table 3. GATE Snubber (JU3)

| JU3 SHUNT POSITION   | DESCRIPTION                      |
|----------------------|----------------------------------|
| Installed            | GATE snubber (R3 and C7) added   |
| Not Installed*       | GATE snubber (R3 and C7) removed |

Evaluates: MAX16141A

## Sleep Mode Input (SLEEP)

Jumper (JU2) allows connecting the sleep input (SLEEP) of  the  MAX16141A  to  the  GND  for  normal  operation through a pulldown resistor (R16) or sleep mode through a pullup (R13). In the sleep mode, the GATE pulls low and allows 400µA of load current though the body diode of the N2. Refer to the device data sheet for more details. See Table 2 for the JU2 jumper settings.

## GATE Snubber

Jumper (JU3) allows the gate of the MAX16141A to be connected  to  the  RC  snubber  network,  R19,  and  C9. The RC snubber slows down the gate voltage ramp rate and helps control inrush current control during power-up when  the  output  of  the  MAX16141A  is  connected  to  a high capacitive load. However, connecting the snubber to the GATE of the MAX16141A slows the reverse voltage blocking  response  time.  Furthermore,  the  MAX16141A is  designed for a specific ramp rate based on the value of the resistor connected from the GRC to ground (R7). Refer to the Electrical Characteristics table or the device data  sheet  for  more  detail.  If  the  RC  snubber  causes longer time for the GATE to reach the maximum voltage level than the value set up by R7, the gate drive switches to a fast mode and forces the gate voltage to transition to its final value. Depending on the output capacitor, a fast transition of the gate voltage could trigger the overcurrent protection and disable the gate drive. To avoid power-up interruption, the RC snubber must be scaled accordingly. Refer to the Electrical  Characteristics  table  for  the  gate charge current specifications for different ramp rate calculations.

## Overvoltage Protection

The MAX16141A EV kit shuts down the output when the input voltage exceeds the upper input voltage limit set by resistors  R11  and  R9  between  the  TERM  and  OVSET pins  of  the  MAX16141A.  Use  the  following  equation  to set the overvoltage threshold for the MAX16141A EV kit.

<!-- formula-not-decoded -->

where,  V OV\_TH   is  the  desired  overvoltage  threshold, R9 = 10kΩ, V TH = 0.5V (typ) threshold for OVSET, and 700Ω is the TERM switch typical resistance.

│

## Undervoltage Protection

The MAX16141A EV kit shuts down the output when the input voltage drops below the lower input voltage limit set by resistors R10 and R8 between the TERM and UVSET pins of the MAX16141A. Use  the following equation to set the undervoltage threshold for the MAX16141A EV kit:

R10 = ((V UV\_TH  x R8)/V TH

<!-- formula-not-decoded -->

where,  V UV\_TH   is  the  desired  undervoltage  threshold, R8 = 10kΩ, V TH = 0.5V (typ) threshold for UVSET, and 700Ω is the TERM switch typical resistance.

## Overcurrent Protection

The MAX16141A EV kit shuts down the output when the load  current  exceeds  the  current  limit  set  by  the  OC\_ THRESHOLD (refer to the MAX16141A IC data sheet), and the sense resistor R1 between RS and OUT of the MAX16141A. Use the following equation to set the overcurrent limit for the MAX16141A EV kit:

<!-- formula-not-decoded -->

where,  R SENSE   is  the  sense  resistor  between  RS  and OUT in Ohms, (V RS -V OUT ) is the overcurrent threshold in volts (refer to the IC data sheet for the proper value), and I OCTH is the desired overcurrent threshold in amperes.

## Short Circuit Protection

The MAX16141A EV kit shuts down the output if the output is shorted to the ground. The output resumes normal level, same as the input, when the short at the output is removed. During overcurrent load/short circuit condition, the MAX1614A enters 300ms (typ) auto-retry mode. Refer to the device data sheet for more details.

## Current-Sense Filter

The MAX16141A EV kit features an optional differentialmode RC filter (R5, R17, and C7) footprint close to the sense resistor R1 to avoid the false overcurrent detection caused by inrush current during power-up. The values for the RC filter components are system dependent and must be  calculated  based  on  the  expected  input  voltage  rise time output load capacitance.

## Increased Input Protection Range

The MAX16141A EV kit is designed to handle input transients  that  exceed  the  MAX16141A's  designed  protection range of 60V to -36V. The provided footprints for an external TVS diode (D6) and a Schottky diode D7 allow to evaluate/test the EV kit for correct performance. However, proper  components  must  be  selected  by  consulting  the manufacturers of the TVS and Schottky diodes to ensure they provide the needed system protection.

## Voltage Limiter Mode

The  MAX16141A  EV  kit  provides  the  option  to  configure the board voltage in a limiter mode using R3. In the voltage-limiter mode, the MAX16141A monitors the output voltage  for  overvoltage  fault  set  by  the  resistive-divider network formed by R3 and R9 from the OUT to OVSET and  COM  (chip  ground).  During  the  overvoltage  condition, the output is regulated at the overvoltage-threshold voltage and continues to supply power to the downstream device. If the overvoltage condition lasts long enough to heat the MOSFET, the MAX16141A reaches thermal limit and pulls the gate low until the device cools by 15°C.

Use the following equation to set the overvoltage limit for the MAX16141A EV kit:

<!-- formula-not-decoded -->

where, V OV\_TH  is the desired overvoltage threshold, R9 = 10kΩ, V TH = 0.5V (typ) threshold for OVSET, and 700Ω is the TERM switch typical resistance.

## Component Suppliers

| SUPPLIER              | PHONE NUMBER   | WEBSITE               |
|-----------------------|----------------|-----------------------|
| Central Semiconductor | 631-435-1110   | www.centralsemi.com   |
| Murata                | 770-436-1300   | www.murata.com        |
| Vishay Semiconductors | 402-563-6866   | www.vishay.com        |
| Panasonic             | 800-344-2112   | www.panasonic.com     |
| TDK                   | 847-803-6100   | www.component.tdk.com |
| Kemet                 | 408-433-9931   | www.kemet.com         |
| On Semiconductor      | 800-282-9855   | www.onsemi.com        |

N ote: Indicate using the MAX16141A when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16141AEVKIT# | EV Kit |

# Denotes RoHS compliance

Evaluates: MAX16141A

│

## MAX16141A Evaluation Kit

## MAX16141A EV Kit Bill of Materials

| DESIGNATION               |   QTY | DESCRIPTION                                                                                                                                |
|---------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2                    |     2 | 0.1µF ±10%, 100V X7R ceramic capacitors (1206) Murata: GRM31CR72E104KW03, GRM319R72A104KA01 TDK: C3216X7R2A104K160AA Kemet: C1206C104K1RAC |
| C3                        |     1 | 0.33µF ±10%, 250V X7R ceramic capacitor (1812) Murata, GRM43DR72E334KW01                                                                   |
| C4                        |     1 | 330µF ±20%, 35V (case _G) electrolytic capacitor, Panasonic: EEE-FK1V331GP                                                                 |
| C5, C6                    |     2 | Not installed, capacitor (0805)                                                                                                            |
| C7                        |     1 | Not installed, capacitor (0603)                                                                                                            |
| C8                        |     1 | 1000pF ±5%, 50V X7R ceramic capacitors (0603) Murata: GRM1885C1H102JA01 TDK: C1608C0G1H102J080                                             |
| C9                        |     1 | 0.01µF ±10%, 100V X7R ceramic capacitors (0805) Murata: GRM21BR72A103KA01 TDK: C0805C103K1RA                                               |
| COM, IN, OUT, SYSGND (X2) |     5 | 20G tinned copper bus wire from / into 'U' shaped loops (0.25in off the PCB)                                                               |
| D1                        |     1 | Not Installed, 15V, Zener diode (SOD-123)                                                                                                  |
| D2                        |     1 | 5.1V, Zener diode (SOD-123) Central Semi. CMHZ5231B                                                                                        |
| D4                        |     1 | 60V, 250mA diode (MICROMELF) Vishay, BAV300                                                                                                |
| D5                        |     1 | 75V, 300mA diode (SOD-123) DIODE, BAS16-7-F                                                                                                |
| D6                        |     1 | TVS diode, (SMTO-263) Littlefuse                                                                                                           |
| D7                        |     1 | 100V, 3A Schottky diode (CASE 403A) On Semiconductors: NRVTSS3100E                                                                         |

Evaluates: MAX16141A

| DESIGNATION                          |   QTY | DESCRIPTION                                                              |
|--------------------------------------|-------|--------------------------------------------------------------------------|
| EN, FAULT, GATE, OVSET, SLEEP, UVSET |     6 | Test point (5002) Keystone                                               |
| IN, OUT, SYSGND(X2)                  |     4 | Banana jacks                                                             |
| JU1-JU3                              |     3 | 2-pin headers, 0.1in centers                                             |
| IN1, IN2                             |     2 | 100V, 41A, n-channel MOSFETs (DPAK), On Semiconductor: NVD6824NLT4G-VF01 |
| Q1                                   |     1 | 65V, 100mA pnp transistor (SOT- 23) On Semiconductor: BC846BLT3G         |
| R1                                   |     1 | 0.005Ω ±1% sense resistor (2728)                                         |
| R2                                   |     1 | 10Ω ±1% resistor (1206)                                                  |
| R4                                   |     1 | 100Ω ±5% resistor (0603)                                                 |
| R5, R17, R21                         |     3 | 0Ω ±1% resistor (0603)                                                   |
| R6, R7                               |     2 | 10kΩ ±5% resistor (0603)                                                 |
| R8, R9                               |     2 | 10kΩ ±1% resistor (0603)                                                 |
| R10                                  |     1 | 162kΩ ±1% resistor (0603)                                                |
| R11                                  |     1 | 175kΩ ±1% resistor (0603)                                                |
| R12-R14, R20                         |     4 | 100kΩ ±1% resistor (0603)                                                |
| R16                                  |     1 | 40kΩ ±5% resistor (0603)                                                 |
| R18                                  |     1 | 0Ω ±5% resistor (0603)                                                   |
| R19                                  |     1 | 1kΩ ±5% resistor (0603)                                                  |
| R22                                  |     1 | 0.5Ω ±1% resistor (0603)                                                 |
| U1                                   |     1 | MAX16141AAAF/VY+                                                         |
| -                                    |     3 | Shunts                                                                   |
| -                                    |     1 | PCB: MAX16141A EVALUATION KIT                                            |

│

## MAX16141A EV Kit Schematic

Figure 1. MAX16141AEV Kit Schematic

<!-- image -->

## MAX16141A EV Kit PCB Layouts

Figure 2. MAX16141A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16141A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16141A EV Kit PCB Layout-Bottom Side

<!-- image -->

Figure 5. MAX16141A EV Kit PCB Layout-Silk Bottom Side

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP ,nteJrated reserYes the riJht to chanJe the circXitry and speci¿cations withoXt notice at any tiPe.

│

Evaluates: MAX16141A