<!-- lastmod 2022-08-02 -->
## MAXM17761 5V Output Evaluation Kit

## General Description

The  MAXM17761  5V-output  evaluation  kit  (EV  kit)  provides a proven design to evaluate the MAXM17761 highvoltage,  high-efficiency,  synchronous  step-down  DC-DC converter. The EV kit is preset for 5V output at load currents up to 1A and features a 537kHz switching frequency for  optimum  efficiency  and  component  size.  The  EV  kit features an adjustable input undervoltage lockout, adjustable  soft-start,  open-drain RESET signal,  and  external frequency  synchronization.  The  MAXM17761  module data  sheet  provides  a  complete  description  of  the  part that  should  be  read  in  conjunction  with  this  data  sheet prior  to  operating  the  EV  kit.  For  full  features,  benefits and parameters of the MAXM17761 module, refer to the MAXM17761 data sheet.

## Benefits and Features

- Highly Integrated Solution with Integrated Shielded Inductor
- Wide 10V to 76V Input Range
- Up to 1A Output Current
- High 91% Efficiency (V IN  = 12V, V OUT  = 5V at 0.2A)
- 537kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- Provision for External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- CISPR-22 Class B Compliant

Evaluates: MAXM17761

## 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- One 10V-76V DC, 1A power supply
- 5W resistive load with 1A sink capacity
- Four digital multimeters (DMM)
- One MAXM17761EVKIT# EV kit

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

Caution: Do not turn on power supply until all con -nections are completed.

- 1) Set the power supply at a voltage between 10V and 76V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN\_EMI PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 2-3 on jumper J1 (see Table 1 for details) and across pin 1-2 of J2.
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V across the output terminals.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17761 5V Output Evaluation Kit

## Detailed Description

The MAXM17761 5V output EV kit is designed to demonstrate  the  salient  features  of  the  MAXM17761  power module. The MAXM17761 EV kit includes an EN/UVLO PCB pad and jumper J1 to enable the output at a desired input voltage. The RT/SYNC PCB pad allows an external clock  interface  to  synchronize  with  the  device. An  additional RESET PCB pad is available for monitoring if the converter output is in regulation.

On the bottom layer of the EV kit, additional footprints for optional components are included to ease board modifi -cation for different input/output configurations. The evalu -ation  board  has  place  holders  available  on  the  bottom layer for installation of EMI filter components.

## Setting the Switching Frequency

Selection  of  switching  frequency  must  consider  input Voltage  range,  desired  output  voltage,  t ON-MIN   of  the MAXM17761,  and  ambient  temperature.  To  optimize efficiency and component size, a switching frequency of 537kHz is chosen. Resistor R3 connected between RT/ SYNC and PGND pins, programs the desired switching frequency. Using Table 1 in the MAXM17761 data sheet, R3 is chosen to be 69.8kΩ. Table 2 in the MAXM17761 data  sheet  lists  the  various  switching  frequency  recommendations for optimized designs.

## Input Capacitor Selection

The input capacitor  serves  to  reduce  the  current  peaks drawn  from  the  input  power  supply  and  also  reduce switching frequency voltage ripple at the input. Table 2in the  MAXM17761  data  sheet  summarizes  the  choice  of Input capacitor for various requirements. Using this table, the  input  capacitor  (C2)  for  this  EV  kit  is  chosen  to  be 2.2µF/100V.

## Output Capacitor Selection

Ceramic output capacitors are preferred due to their stability over temperature in industrial applications. Table 2 in MAXM17761 data sheet summarizes the choice of output capacitor for various requirements. Using this table, the output  capacitor  (C12)  for  this  EV  kit  is  chosen  to  be 47μF/10V.

## Adjusting Output Voltage

MAXM17761  supports  an  adjustable  output  voltage range, from 0.8V to 5V, using a feedback resistive divider from VOUT to PGND. In this EV kit, by placing a shunt across 1-2 of jumper J2, the resistive divider is formed by R7 and internal 22.1kΩ. By placing a shunt across 2-3 of

## Evaluates: MAXM17761 5V Output-Voltage Application

jumper J2, the resistive divider is formed by R7 and R9. See Table 2 for J2 settings.

To  get  different  output  voltages,  refer  to  Table  2  in MAXM17761 datasheet. R7  and R9 of the EV kit correspond to R U  and R B  of Setting the Output Voltage section in the MAXM17761 data sheet.

## Soft-Start Capacitor

MAXM17761 offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by changing the value of C 10 , the external capacitor from SS pin to PGND. The capacitance required for a given softstart time (t SS ) is given by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  5ms  soft-start  time,  a  33nF capacitor should be connected from SS pin to PGND.

A parallel combination of the internal SS\_C capacitor and the optional external capacitor (C10) can also be used to program soft-start time.

## Enable/Undervoltage-Lockout (EN/UVLO)

MAXM17761 offers an adjustable input undervoltage lockout feature. In this EV kit, place a shunt across pins 2-3 of Jumper J1 to enable the power conversion when V IN exceeds 9.5V. To disable the output, install a shunt across pins 1-2 of J1. Leave jumper J1 pins open for always-on operation. See Table 1 for J1 settings. Calculate the value of R1 and R2 based on the following equations.

<!-- formula-not-decoded -->

Where V INU  is the input voltage at which the MAXM17761 is required to turn on and R1 is in Ω.

Calculate the value of R2 in Ω as follows

<!-- formula-not-decoded -->

For  the  MAXM17761  to  turn  on  at  9.5V  input,  resistor (R1) is chosen as 806kΩ and resistor (R2) is calculated as 95.3kΩ.

## External Clock Synchronization (RT/SYNC)

The  internal  oscillator  of  MAXM17761  can  be  synchronized  to  an  external  clock  signal  through  the  RT/SYNC pin.  External  synchronization  clock  frequency  must  be between 1.15 × f SW  and 1.4 × f SW , where f SW  is the frequency of operation as set by resistor R3. The minimum external  clock  low  pulse  width  should  be  greater  than 40ns, and the amplitude of external clock pulse should be greater 1.22V.

## MAXM17761 5V Output Evaluation Kit

## EXTVCC Linear Regulator

Powering VCC from EXTVCC increases the efficiency at higher input voltages. If the applied EXTVCC voltage is greater than 4.74V (typ), VCC is powered from EXTVCC. If  EXTVCC  is  lower  than  4.74V  (typ),  VCC  is  powered from VIN. Refer to the MAXM17761 module data sheet for further information. Resistor R6 (0Ω) connects VOUT to EXTVCC in this EV kit.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAXM17761 EV kit PCB has designated footprints on  the  bottom  side  for  placement  of  EMI  filter  compo -nents.  Use  of  EMI  filter  components,  as  shown  in  the schematic, results in  lower  conducted  emissions,  below CISPR22 Class B limits. Cut open the trace at L 1 , before installing EMI filter components. The MAXM17761 EV kit PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

## Hot-Plug-In and Long Input Cables

The MAXM17761 EV kit PCB provides an optional electrolytic  capacitor  (C 1 ,  22µF/100V).  This  capacitor  limits the peak voltage at the input of the MAXM17761 power module, when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equivalent  series  resistance (ESR) of the electrolytic capacitor dampens  the  oscillations  caused  by  interaction  of  the inductance  of  the  long  input  cables,  and  the  ceramic capacitors at the power module Input.

## Evaluates: MAXM17761 5V Output-Voltage Application

## Table 1. UVLO Enable/Disable Configuration (J1)

| POSITION      | EN/UVLO PIN                                                | MAXM17761 OUTPUT                                                      |
|---------------|------------------------------------------------------------|-----------------------------------------------------------------------|
| Not Installed | Floating                                                   | Enabled                                                               |
| 2-3*          | Connected to the center node of resistor-divider R1 and R2 | Programmed to startup at desired input voltage level set by R1 and R2 |
| 1-2           | Connected to PGND                                          | Disabled                                                              |

* Default position.

## Table 2. Adjusting the Output Voltage (J2)

| POSITION      | FB PIN                                                                               |
|---------------|--------------------------------------------------------------------------------------|
| 1-2*          | Connected to the center node of resistor- divider R7 and internal feedback resistor. |
| 2-3           | Connected to the center node of resistor- divider R7 and R9                          |
| Not Installed | Results in V OUT = 0.8V                                                              |

* Default position.

│

## MAXM17761 5V Output Evaluation Kit

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 5V, I OUT  = 1A, T A  = 25°C. All voltages are referenced to PGND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAXM17761

5V Output-Voltage Application

│

## MAXM17761 5V Output Evaluation Kit

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 1A, T A  = 25°C. All voltages are referenced to PGND, unless otherwise noted.)

CONDITIONS: V IN = 24V, V OUT = 5V, LOAD = 1A

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Murata Americas          | www.murata.com           |
| NEC TOKIN America, Inc.  | www.nec-tokinamerica.com |
| Panasonic Corp.          | www.panasonic.com        |
| SANYO Electric Co., Ltd. | www.sanyodevice.com      |
| TDK Corp.                | www.component.tdk.com    |
| TOKOAmerica, Inc.        | www.tokoam.com           |

Note: Indicate that you are using the MAXM17761 when contacting these component suppliers.

<!-- image -->

FREQUENCY(HZ)

CONDITIONS: V IN = 24V, V OUT = 5V, LOAD = 1A

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17761EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAXM17761

5V Output-Voltage Application

│

## MAXM17761 5V Output Evaluation Kit

## MAXM17761 EV Kit Bill of Materials

Evaluates: MAXM17761

## 5V Output-Voltage Application

| MANUFACTURER PARTNUMBER-2   |                                       |                                                   |                                                          | Yageo CC0603KRX7R0BB104                                     |    |              |              |              |              |              |                                              |                         |                                                          |                                                    | YAGEO RC0402FR-0710K                                   |                          |                             |                                     |      |                                  |                                 |                                                      |                   |    |    |
|-----------------------------|---------------------------------------|---------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------|----|--------------|--------------|--------------|--------------|--------------|----------------------------------------------|-------------------------|----------------------------------------------------------|----------------------------------------------------|--------------------------------------------------------|--------------------------|-----------------------------|-------------------------------------|------|----------------------------------|---------------------------------|------------------------------------------------------|-------------------|----|----|
| MANUFACTURER PARTNUMBER-1   | PANASONIC EEE-FK2A220P                | MURATA GRM31CR72A225KA73 MURATA GRM1555C1E470JA01 | OPEN MURATA GRM188R72A104KA35                            | OPEN                                                        |    | OPEN         | OPEN         | OPEN         | OPEN         | OPEN         | MURATA GRM32ER61A476KE20                     | OPEN OPEN               | VISHAY DALE CRCW0402806KFK VISHAY DALE CRCW040230K1FK    | PANASONIC ERJ-2RKF6982X VISHAY DALE CRCW040210K0FK | VISHAY DALE CRCW0402243KFK PANASONIC ERJ-2GE0R00X      |                          | PANASONIC ERJ-2RKF1183      | PANASONIC ERJ-2GE0R00X OPEN         | OPEN | Vishay Dale (IHLP2020BZER6R8M01) | MAXM17761                       | KEYSTONE (24384)                                     | KEYSTONE(29300)   |    |    |
| DESCRIPTION                 | 1 22µF±20%,100V, Aluminimum Capacitor | 1 2.2µF±10%,100V, X7R ceramic capacitor (1206)    | 1 47PF±5%,25V, X7R ceramic capacitor (0402) 1 OPEN(0603) | 1 0.1UF±10%,100V, X7R ceramic capacitor (0603) 1 OPEN(1206) |    | 1 OPEN(1206) | 1 OPEN(2220) | 1 OPEN(2220) | 1 OPEN(0402) | 1 OPEN(1210) | 1 47UF±10%,10V, X5R ceramic capacitor (1210) | 1 OPEN(0603) OPEN(DSN2) | 1 806kΩ ±1% resistor (0402) 1 95.3kΩ ±1% resistor (0402) | 1 69.8kΩ ±1% resistor (0402)                       | 1 10kΩ ±1% resistor (0402) 1 243kΩ ±1% resistor (0402) | 1 0R ±0% resistor (0402) | 1 118kΩ ±1% resistor (0402) | 0R ±0% resistor (0402) 1 OPEN(0603) |      | OPEN(1206)                       | 1 OPEN(6.8µH±20%,2.4A Inductor) | 1 MAXM17761, 28-pin SIP Power Module 02-SOM25012H-00 | 4 02-MSM25004S-00 |    |    |
| QTY                         |                                       |                                                   |                                                          |                                                             |    |              |              |              |              |              |                                              | 1                       |                                                          |                                                    |                                                        |                          |                             | 1                                   |      | 1                                |                                 | 4                                                    |                   |    |    |
| DESIGNATION                 | C1                                    | C2                                                | C3 C4                                                    | C5 C6                                                       |    | C7           | C8           | C9           | C10          | C11          | C12                                          | C13                     | R1                                                       | R2 R3                                              | R4 R5                                                  | R6                       | R7                          | R8                                  | R9   | FB1                              | L1                              | MECH1-MECH4                                          | SCREW1-SCREW4     |    |    |
| S NO                        |                                       | 2                                                 |                                                          | 5                                                           |  7 |              | 8            | 9            | 10           | 11           | 12                                           |                         |                                                          | 17                                                 | 19                                                     | 20                       |                             | 21                                  | 22   | 24                               | 25                              |                                                      | 28                |    |    |
|                             |                                       |                                                   |                                                          |                                                             |    |              |              |              |              |              |                                              | 13                      |                                                          |                                                    |                                                        |                          |                             |                                     | 23   |                                  |                                 |                                                      |                   |    |    |
|                             |                                       |                                                   |                                                          |                                                             |    |              |              |              |              |              |                                              |                         | 15                                                       | 16                                                 |                                                        |                          |                             |                                     |      |                                  |                                 |                                                      |                   |    |    |
|                             |                                       |                                                   |                                                          |                                                             |  6 |              |              |              |              |              |                                              |                         |                                                          |                                                    |                                                        |                          |                             |                                     |      |                                  |                                 | 26                                                   | 27                | 14 |    |
|                             |                                       |                                                   | 3                                                        |                                                             |    |              |              |              |              |              |                                              |                         |                                                          |                                                    |                                                        |                          |                             |                                     |      |                                  |                                 |                                                      |                   |    |    |
|                             |                                       |                                                   |                                                          |                                                             |    |              |              |              |              |              |                                              |                         |                                                          |                                                    |                                                        |                          |                             |                                     |      |                                  |                                 |                                                      | 18                |    |    |
|                             |                                       |                                                   |                                                          | 4                                                           |    |              |              |              |              |              |                                              | D1                      |                                                          |                                                    |                                                        |                          |                             |                                     |      |                                  |                                 |                                                      |                   |    | U1 |
|                             | 1                                     |                                                   |                                                          |                                                             |    |              |              |              |              |              |                                              |                         |                                                          |                                                    |                                                        |                          |                             |                                     |      |                                  |                                 |                                                      |                   |    |    |

│

## MAXM17761 5V Output Evaluation Kit

## MAXM17761 EV Kit Schematic

<!-- image -->

│

Evaluates: MAXM17761

5V Output-Voltage Application

## MAXM17761 5V Output Evaluation Kit

## MAXM17761 EV Kit PCB Layout Diagrams

Silk Top

<!-- image -->

L2 GND

<!-- image -->

## Evaluates: MAXM17761 5V Output-Voltage Application

Top

<!-- image -->

L3 PWR

<!-- image -->

│

Evaluates: MAXM17761

5V Output-Voltage Application

## MAXM17761 EV Kit PCB Layout Diagrams (continued)

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## MAXM17761 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/17            | Initial release | -               |
|               0.5 |                 | Corrected typos | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAXM17761

5V Output-Voltage Application