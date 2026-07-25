<!-- lastmod 2022-08-02 -->
## MAXM17575 5V Output Evaluation Kit

## General Description

The MAXM17575 5V output evaluation kit (EV kit)  provides a proven design to evaluate the MAXM17575 highvoltage,  high-efficiency,  synchronous  step-down  DC-DC power module. The EV kit is preset for 5V output at load currents up to 1.5A and features a 900kHz switching fre -quency for optimum efficiency and component size. The EV kit features an adjustable input undervoltage lockout, adjustable soft-start, open-drain RESET signal, and external frequency synchronization. The MAXM17575 module data  sheet  provides  a  complete  description  of  the  part that  should  be  read  in  conjunction  with  this  data  sheet prior  to  operating  the  EV  kit.  For  full  features,  benefits and parameters of the MAXM17575 module, refer to the MAXM17575 data sheet.

## Features

- Highly-Integrated Solution with Built-In Shielded Inductor
- Wide 7.5V to 60V Input Range
- Programmed 5V Output, up to 1.5A Output Current
- High 92% Efficiency (VIN = 12V, VOUT = 5V at 0.5A)
- 900kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 1ms Soft-Start Time
- PWM Mode of Operation
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- CISPR-22 Class B Compliant

Evaluates: MAXM17575

5V Output Application

## Quick Start

## Recommended Equipment

- One 7.5V to 60V DC, 2A power supply
- 7.5W resistive load with 1.5A sink capacity
- Four digital multimeters (DMM)
- One MAXM17575 EVKIT# EV kit

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

Caution: Do not turn on power supply until all connec -tions are completed.

- 1) Set the input power supply at a voltage between 7.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN\_EMI  pad  and  the  negative  terminal  to  the nearest  PGND  pad.  Connect  the  positive  terminal of the 1.5A load to the VOUT pad and the negative terminal to the nearest PGND pad.
- 3) Connect  a  DVM  (DMM  in  Voltage  measurement mode) across the VOUT pad and the nearest PGND pad.
- 4) Verify  that  shunts  are  not  installed  on  jumper  J1 (see Table 1 for details).
- 5) Turn on the input power supply.
- 6) Enable the load.
- 7) Verify  that  the  DVM  displays  5V  across  the  output terminals.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17575 5V Output Evaluation Kit

## Detailed Description

The  MAXM17575  EV  kit  is  designed  to  demonstrate the  salient  features  of  the  MAXM17575  power  module. The MAXM17575 EV kit includes an EN/UVLO pad and jumper J1 to enable the output at a desired input voltage. The  RT/SYNC  pad  allows  an  external  clock  interface to  synchronize  the  device. An  additional RESET pad  is available for monitoring if the converter output voltage is in regulation.

On the bottom layer of the EV kit, additional footprints for optional components are included to ease board modifica -tion for different input/output configurations. Placeholders are also available on the bottom layer for installation of EMI  filter  components.  EMI  component  values  are  pro -vided in the schematic.

## Setting the Switching Frequency

Selection  of  switching  frequency  must  consider  input voltage range and desired output voltage, t ON(MIN) and t OFF(MIN)  of  the  MAXM17575.  To  optimize  efficiency and  component  size,  a  switching  frequency  of  900kHz is  chosen  for  the  5V  output.  Resistor  R1,  connected between  the  RT/SYNC  and  SGND  pins,  programs  the desired switching frequency. Referring to Table 1 in the MAXM17575 data sheet, R1 is chosen to be 21.5kΩ. See Table 1 in the MAXM17575 data sheet to see the various switching frequency recommendations for optimized vari -ous output designs.

## Input Capacitor Selection

The input capacitor  serves  to  reduce  the  current  peaks drawn  from  the  input  power  supply  and  also  reduce switching frequency voltage ripple at the input. Refer to Table 1 in the MAXM17575 data sheet to see the sum -mary of input capacitors choices for various requirements. Using this table, the input capacitor (C5) for this EV kit is chosen to be 2.2µF/100V.

## Output Capacitor Selection

X7R  ceramic  output  capacitors  are  preferred  due  to their  stability  over  temperature in industrial applications. Refer to  Table 1 in the MAXM17575 data sheet to see a summary of output capacitor choices for various require -ments. Using this table, the output capacitor (C13) for this EV kit is chosen to be 22μF/10V.

## Adjusting Output Voltage

The  MAXM17575  supports  an  adjustable  output  voltage range, from 0.9V to 12V, using a feedback resistive divider from OUT to FB. To get different output voltages, refer to  Table 1 in the MAXM17575 data sheet. R7 and

## Evaluates: MAXM17575 5V Output Application

R8 of the EV kit correspond to RU and RB in  Table 1 of MAXM17575 data sheet.

## Soft-Start Programming

MAXM17575  offers  an  adjustable  soft-start  function  to limit inrush current during startup. In this EV kit SS pin is connected to SS\_C using short trace to have default 1ms soft-start  time.  The  soft-start  time  can  be  increased  by adding C11, the external capacitor from SS pin to SGND. The  capacitance  required  for  additional  soft-start  time (t SS) is given by the following equation:

<!-- formula-not-decoded -->

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The MAXM17575 has an internal pullup resistor (3.3MΩ) from EN/UVLO to VIN to enable a default start up. The device  offers  an  adjustable  input  under  voltage  lockout feature.  In  this  EV  kit,  for  normal  operation,  leave  the jumper  J1  open.  To  disable  the  output,  install  a  jumper across  pins  1-2  on  J1.  See Table  1 for  J1  settings. Resistor R3 connected from EN/UVLO to SGND sets the input voltage (V INU ) at which the device should turn on. Value of R3 resistor is calculated as follows:

<!-- formula-not-decoded -->

where R3 is in kΩ.

For the MAXM17575 to turn on at 7.0V input, the resistor (R3) is calculated to be 698kΩ.

## External Clock Synchronization (RT/SYNC)

The  internal  oscillator  of  the  MAXM17575  can  be  syn -chronized  to  an  external  clock  signal  through  the  RT/ SYNC pin. The external synchronization clock frequency must be between 1.1 x f SW  and 1.4 x f SW , where f SW is the frequency programmed by the R1 resistor. When an external clock is applied to the RT/SYNC pin, the inter -nal  oscillator  frequency  synchronizes  to  external  clock frequency  (from  original  frequency  based  on  the  RT setting)  after  detecting  16  external  clock  edges.  The minimum external clock high pulse width and amplitude should be greater than 50ns and 2.1V, respectively. The maximum external clock low pulse amplitude should be less than 0.8V.

## MAXM17575 5V Output Evaluation Kit

## EXTVCC Linear Regulator

Powering  VCC  from  EXTVCC\_C  increases  the  effi -ciency  at  higher  input  voltages.  If  the  EXTVCC\_C  volt -age  is  greater  than  4.7V  (typ),  VCC  is  powered  from EXTVCC\_C.  If  EXTVCC\_C  is  lower  than  4.7V  (typ), VCC is  powered  from  VIN.  Refer  to  MAXM17575  data sheet for further information. Resistor R6 (0Ω) connects EXTVCC\_C to EXTVCC\_R in this EV kit.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAXM17575 EV kit PCB has designated footprints on  the  bottom  side  for  placement  of  EMI  filter  compo -

## Evaluates: MAXM17575 5V Output Application

nents.  Use  of  EMI  filter  components  as  shown  in  the schematic  results  in  lower  conducted  emissions,  below CISPR22 Class B limits. Cut open the trace at L1, before installing EMI filter components. The MAXM17575 EV kit PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

## Hot Plug-In and Long Input Cables

The MAXM17575 EV kit PCB provides an optional elec -trolytic  capacitor  (C2,  10µF/100V).  This  capacitor  limits the peak voltage at the input of the MAXM17575 power module, when the DC input source is hot pulgged to the EV kit input terminals with long input cables. The equiva -lent  series  resistance (ESR) of the electrolytic capacitor dampens  the  oscillations  caused  by  interaction  of  the inductance  of  the  long  input  cables,  and  the  ceramic capacitors at the power module input.

## Table 1. UVLO Enable/Disable Configuration (J1)

| POSITION       | EN/UVLO PIN                                                             | MAXM17575 OUTPUT                                     |
|----------------|-------------------------------------------------------------------------|------------------------------------------------------|
| Not installed* | Connected to the center node of resistor-divider 3.3MΩ(internal) and R3 | Programmed to startup at desired input voltage level |
| 1-2            | Connected to SGND                                                       | Disabled                                             |

* Default position

## EV Kit Performance Report

(VIN = 24V, VOUT = 5V, IOUT = 1.5A, T A = +25ºC. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

Evaluates: MAXM17575

5V Output Application

## MAXM17575 5V Output Evaluation Kit

## MAXM17575 5V EV Kit Bill of Materials

|   S NO | DESIGNATION   |   QTY | DESCRIPTION                                       | MANUFACTURER PARTNUMBER-1      | MANUFACTURER PARTNUMBER-2   |
|--------|---------------|-------|---------------------------------------------------|--------------------------------|-----------------------------|
|      1 | C1            |     1 | 100pF±10%, 50V, C0G Ceramic Capacitor (0402)      | KEMET C0402C101K5GAC           | TDK C1005C0G1H101K050BA     |
|      2 | C2            |     1 | 10µF±20%,100V, Aluminum Capacitor                 | PANASONIC EEE-TG2A100P         |                             |
|      3 | C3            |     1 | OPEN ,4.7µF±10%,10V, X7R Ceramic Capacitor (0805) | TDK C2012X7R1A475K085AC        |                             |
|      4 | C4            |     1 | 0.1µF±10%,100V, X7R Ceramic Capacitor(0603)       | MURATA GRM188R72A104KA35       | YAGEO CC0603KRX7R0BB104     |
|      5 | C5            |     1 | 2.2µF±10%,100V, X7R Ceramic Capacitor (1210)      | MURATA GRM32ER72A225KA35       | TDK CGA6N3X7R2A225K230      |
|      6 | C6            |     1 | 47pF±5%,50V, C0G Ceramic Capacitor (0402)         | VENKEL LTD C0402C0G500-470JNE  | MURATA GRM1555C1H470JA01    |
|      7 | C7            |     1 | OPEN ,1µF±10%,100V, X7R Ceramic Capacitor (1210)  | MURATA GRM32CR72A105KA35       |                             |
|      8 | C8            |     1 | OPEN ,1µF±10%,100V, X7R Ceramic Capacitor (1210)  | MURATA GRM32CR72A105KA35       |                             |
|      9 | C9            |     1 | OPEN ,1µF±10%,100V, X7R Ceramic Capacitor (1210)  | MURATA GRM32CR72A105KA35       |                             |
|     10 | C10           |     1 | OPEN (0603)                                       |                                |                             |
|     11 | C11           |     1 | OPEN (0603)                                       |                                |                             |
|     12 | C12           |     1 | OPEN (0603)                                       |                                |                             |
|     13 | C13           |     1 | 22µF±10%,10V, X7R Ceramic Capacitor (1210)        | MURATA GRM32ER71A226K          |                             |
|     14 | C14           |     1 | OPEN(0603)                                        |                                |                             |
|     15 | R1            |     1 | 21.5k Ω ±1% Resistor (0402)                       | PANASONIC ERJ-2RKF2152         |                             |
|     16 | R3            |     1 | 698k Ω ±1% Resistor (0402)                        | PANASONIC ERJ-2RKF6983         |                             |
|     17 | R4            |     1 | 1k Ω ±1% Resistor (0402)                          | VISHAY DALE CRCW04021K00FK     | YAGEO RC0402FR-071KL        |
|     18 | R5            |     1 | 10k Ω ±1% Resistor (0402)                         | VISHAY DALE CRCW040210K0FK     | YAGEO RC0402FR-0710K        |
|     19 | R6            |     1 | 0 Ω Resistor (0402)                               | VISHAY DALE CRCW04020000Z0EDHP | VISHAY DALE RCS04020000Z0   |
|     20 | R7            |     1 | 75k Ω ±1% Resistor (0402)                         | VISHAY DALE CRCW040275K0FK     |                             |
|     21 | R8            |     1 | 16.2k Ω ±1% Resistor (0402)                       | PANASONIC ERJ2RKF1622          |                             |
|     22 | FB1           |     1 | OPEN                                              | OPEN                           |                             |
|     23 | L1            |     1 | OPEN (10µH ±20%,2A Inductor)                      | PULSE PA4332.103NLT            |                             |
|     24 | U1            |     1 | MAXM17575, 28-pin SIP Power Module                | MAXM17575ALI#                  |                             |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17575EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| Vishay          | www.vishay.com        |
| TDK Corp.       | www.component.tdk.com |

Note: Indicate that you are using MAXM17575 when contacting these component suppliers.

Evaluates: MAXM17575

5V Output Application

## MAXM17575 5V EV Kit Schematic

<!-- image -->

## MAXM17575 5V Output Evaluation Kit

## MAXM17575 5V EV Kit PCB Layouts

MAXM17575 5V EV Kit Component Placement GuideComponent Side

<!-- image -->

Evaluates: MAXM17575

MAXM17575 5V EV Layout Top Layer

<!-- image -->

MAXM17575 5V EV Layout Layer 2

<!-- image -->

## MAXM17575 EV Kit PCB Layouts (continued)

<!-- image -->

MAXM17575 5V EV Layout Layer 3

MAXM17575 5V EV Layout Bottom Layer

<!-- image -->

MAXM17575 5V EV Layout Bottom Silkscreen

<!-- image -->

Evaluates: MAXM17575

## MAXM17575 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAXM17575

5V Output Application