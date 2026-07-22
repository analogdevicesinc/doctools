<!-- lastmod 2022-08-02 -->
## MAXM17546EVKITBE# 5V Output Evaluation Kit

## General Description

The Himalaya series of voltage regulator ICs and power modules  enable  cooler,  smaller,  and  simpler  powersupply  solutions. The  MAXM17546EVKITBE# 5V-output evaluation  kit (EV  kit) is  a  demonstration  circuit  of the  MAXM17546  42V,  5A  high-efficiency,  current-mode, synchronous step-down DC-DC switching power module. The EV kit operates over a wide input-voltage of 7.5V to 42V and provides up to 5A load current with a 5V-output voltage.  The  EV  kit  is  programmed  to  switch  at  a frequency of 450kHz. The module is simple to use and easily  configurable  with  minimal  external  components. It  features  cycle-by-cycle  peak  current-limit  protection, under-voltage lockout (EN/UVLO), and thermal shutdown.

The EV kit comes with the compact 29-pin 15mm x 9mm x 4.32mm SiP package MAXM17546 module installed and is rated to operate over the full industrial -40°C to +125°C temperature range.

The MAXM17546 module data sheet provides a complete description of the part that should be read in conjunction with this data sheet prior to operating the EV kit. For full module  features,  benefits  and  parameters,  refer  to  the MAXM17546 data sheet.

## Features

- Wide 7.5V to 42V Input Range
- Highly Integrated Solution with Built-In Shielded Inductor
- Programmed 5V Output, Up To 5A Output Current
- All Ceramic Capacitors and Ultra-Compact Solution
- Selectable PWM, DCM, and PFM Modes
- Programmable 4ms Soft-Start Time and Prebias Startup
- Open-Drain RESET Output Pulled Up To 5V V CC
- Programmable EN/UVLO Threshold
- Provision for External Frequency Synchronization
- Hiccup Overcurrent Protection (OCP)
- Overtemperature Protection (OTP)
- -40°C to +125°C Industrial Temperature Range
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Evaluates: MAXM17546 5V Output

## Quick Start

## Recommended Equipment

- MAXM17546EVKITBE# evaluation kit
- 7.5V to 42V DC, 4A power supply
- Dummy load capable of sinking 5A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Equipment Setup and Test Procedure

The  MAXM17546EVKITBE#  is  fully  assembled  and tested. Follow the steps below to verify board operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 7.5V and 42V. Disable the power supply.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to VIN and GND PCB pads, respectively.
- 3) Connect the positive and negative terminals of the 5A load to VOUT and GND PCB pads respectively, and the set the load to 0A.
- 4) Connect the DVM across the VOUT PCB pad and the GND PCB pad.
- 5) Verify that shunts are not installed on jumper J1 (see Figure 1 for details).
- 6) Select the shunt position on jumper J2 according to the intended mode of operation (see Table 2 for details).
- 7) Enable the input power supply.
- 8) Verify the DVM display 5V.
- 9) Increase the load up to 5A to verify the output voltage is 5V using DVM.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17546EVKITBE# 5V Output Evaluation Kit

## Detailed Description of Hardware

The MAXM17546EVKITBE#  is  a  proven  circuit to demonstrate the high-voltage, high-efficiency, and compact  solution  size  of  the  MAXM17546  synchronous step-down  DC-DC  power  module.  The  output  voltage is  preset  to  5V  to  operate  from  7.5V  to  42V  input  and provides  up  to  5A  load  current.  The  optimal  frequency is  set  at  450kHz  to  maximize  efficiency  and  minimize component  size.  The  EV  kit  includes  test  points  for monitoring voltage at V CC , RESET and LX pins.

## Soft-Start Input (SS)

The MAXM17546 module implements adjustable soft-start operation to reduce inrush current. A capacitor connected from  the  SS  pin  to  SGND  programs  the  soft-start  time. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

where  t SS   is  in  ms  and  C SS is  in  nF.  For  example,  to program a 4ms soft-start time, a 22nF capacitor should be connected from the SS pin to SGND.

## Regulator Enable/ Undervoltage-Lockout Level (EN/UVLO)

The EV kit offers an adjustable input undervoltage-lockout level by resistor-dividers connecting between the IN, EN/ UVLO,  and  GND  pins.  For  normal  operation,  a  shunt

## Evaluates: MAXM17546 5V Output

should not be installed across pins 1-2 on J1 to enable the output through an internal pullup 3.32MΩ resistor from the EN/UVLO pin to the IN pin. To disable the output, install the shunt across pins 1-2 on J1 to pull the EN/UVLO pin to GND. See Table 1 for J1 setting details. The EV kit also provides  an  R3  resistor  to  program  a  UVLO  threshold voltage  at  which  an  input-voltage  level  device  turns on.  The  R3  resistor  can  be  calculated  by  the  following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on, and R3 is in MΩ.

## MODE/SYNC Selection (MODE)

The device's MODE pin can be used to select among the PWM, PFM, or DCM modes of operation. The logic state of the MODE pin is latched when the V CC  and EN/UVLO voltages  exceed  the  respective  UVLO  rising  thresholds and all internal voltages are ready to allow LX switching. State  changes  on  the  MODE  pin  are  ignored  during normal operation. Refer to the MAXM17546 IC data sheet for more information on the PWM, PFM, and DCM modes of operation.

Table  2  lists  J2  jumper  settings  that  can  be  used  to configure  the  desired  mode  of  operation.  The  internal oscillator  of  the  device  can  be  synchronized  to  an external  clock  signal  on  the  SYNC  pin.  The  external synchronization  clock  frequency  must  be  between  1.1 x  f SW and  1.4  x  f SW ,  where  f SW     is  the  frequency  of operation  set  by  R4.  The  minimum  external  clock  high pulse  width  should  be  greater  than  50ns,  while  the minimum external clock low pulse width should be greater than 160ns.

## Table 1. EN/UVLO Enable/Disable Configuration (J1)

| SHUNT POSITION   | EN PIN                                                         | MAXM17546_OUTPUT                                            |
|------------------|----------------------------------------------------------------|-------------------------------------------------------------|
| 1-2              | Connected to GND                                               | Disabled                                                    |
| Not installed*   | Connected to the center node of resistor-divider 3.32MΩ and R3 | Enabled, UVLO level set through the 3.32MΩ and R3 resistors |

*Default position

## Table 2. MODE Description (J2)

| SHUNT POSITION   | MODE PIN          | MAXM17546_MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to GND  | PWM mode of operation |

*Default position

## MAXM17546EVKITBE# 5V Output Evaluation Kit

## EXTVCC Linear Regulator

Powering  V CC  of  the  IC  from  EXTVCC  increases  the efficiency  of  the  power  converter  at  higher  input  voltages. If the applied EXTVCC voltage is greater than 4.7V (typ), V CC  is powered from EXTVCC. If EXTVCC is lower than 4.7V (typ), V CC  is powered from V IN . Refer to the MAXM17546 module data sheet for  further  information. To  connect  EXTVCC  to  V OUT   place  the  shunt  across pins 2-3 of jumper J3. Refer to Table 3 for summary of EXTVCC jumper configurations.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter. The  EMI  filter attenuates high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  the  EV  kit schematic  results  in  lower  conducted  emissions  below CISPR22  Class  B  limits.  The  MAXM17546EVKITBE#

## Table 3. EXTVCC Configuration (J3)

| SHUNT POSITION   | EXTVCC PIN         | EXTVCC FUNCTION       |
|------------------|--------------------|-----------------------|
| Not installed    | Unconnected        | V CC Powered by V IN  |
| 1-2              | Connected to GND   | V CC Powered by V IN  |
| 2-3*             | Connected to V OUT | V CC Powered by V OUT |

*Default position

## Evaluates: MAXM17546 5V Output

PCB layout is also designed to limit radiated emissions from switching nodes of the power converter resulting in radiated emissions below CISPR22 Class B limits.

## Hot-Plug-In and Long Input Cables

The MAXM17546EVKITBE# PCB provides an electrolytic capacitor (C24, 47µF/80V) to dampen input voltage peaks and oscillations  that  can  arise  during  hot-plug-in  and/or due to  long  input  cables.  This  capacitor  limits  the  peak voltage  at  the  input  of  the  MAXM17546  power  module when the EV kit  is  powered  directly  from  a  precharged capacitive source or an industrial backplane PCB. Long input  cables,  between  the  input  power  source  and  the EV  kit  circuit  can  cause  input-voltage  oscillations  due to  the  inductance  of  the  cables.  The  equivalent  series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables. Further, capacitors  C16  (150pF/100V)  and  C17  (0.1µF/100V) placed  near  the  input  of  the  board  helps  in  attenuating high frequency noise.

## MAXM17546EVKITBE# Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM17546 5V Output

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17546EVKITBE# Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17546EVKITBE# 5V Output Evaluation Kit

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAXM17546EVKITBE# | EV Kit |

#Denotes RoHS compliant.

## MAXM17546EVKITBE# Bill of Materials

|   ITEM |   QTY | DESIGNATION      | DESCRIPTION                                              | MANUFACTURER PART NUMBER - 1   | MANUFACTURER PART NUMBER - 2   |
|--------|-------|------------------|----------------------------------------------------------|--------------------------------|--------------------------------|
|      1 |     2 | C2, C3           | 220pF±5%, 100V, C0G ceramic capacitor (0603)             | TDK C1608C0G2A221J080AA        |                                |
|      2 |     4 | C4-C7            | 4.7µF±10%, 50V, X7R ceramic capacitor (1206)             | MURATA GRM31CR71H475KA12       | MURATA GRM31CR71H475KA12       |
|      3 |     4 | C8, C9, C15, C17 | 0.1µF±10%, 100V, X7R ceramic capacitor (0603)            | MURATA GCJ188R72A104KA01       | YAGEO CC0603KRX7R0BB104        |
|      4 |     1 | C10              | 2.2pF±0.1p, 50V, X7R ceramic capacitor (0603)            | AVX 06035J2R2BBT               |                                |
|      5 |     1 | C11              | 0.022µF±10%, 50V, X7R ceramic capacitor (0603)           | MURATA GCJ188R71H223KA01       | KEMET C0603C223K5RAC           |
|      6 |     3 | C12-C14          | 22µF±10%, 25V, X7R ceramic capacitor (1210)              | MURATA GRM32ER71E226KE15       |                                |
|      7 |     1 | C16              | 150pF±5%, 100V, C0G ceramic capacitor (0402)             | TDK C1005C0G2A151J050BA        |                                |
|      8 |     1 | C24              | 47µF±20%, 80V, Aluminium Electrolytic                    | PANASONIC EEE-FK1K470P         |                                |
|      9 |     1 | R1               | 249K Ω ±1% resistor (0603)                               | PANASONIC ERJ-3EKF2493         |                                |
|     10 |     1 | R2               | 54.9K Ω ±1% resistor (0603)                              | VISHAY DALE CRCW060354K9FK     |                                |
|     11 |     1 | R3               | 665K Ω ±1% resistor (0603)                               | VISHAY DALE CRCW0603665KFK     |                                |
|     12 |     1 | R5               | 10K Ω ±1% resistor (0603)                                | VISHAY DALE CRCW060310K0FK     | PANASONIC ERJ-3EKF1002         |
|     13 |     1 | R6               | 0 Ω ±1% resistor (0603)                                  | VISHAY DALE CRCW06030000ZS     | PANASONIC ERJ-3GEY0R00         |
|     14 |     1 | U1               | MAXM17546 DC-DC Module                                   | MAXM17546ALY#                  |                                |
|     15 |     1 | C1               | OPTIONAL : 220pF±5%, 100V, C0G ceramic capacitor (0603)  | TDK C1608C0G2A221J080AA        |                                |
|     16 |     5 | C18-C22          | OPTIONAL : 4.7µF±10%, 50V, X7R ceramic capacitor (1206)  | MURATA GRM31CR71H475KA12       | MURATA GRJ31CR71H475KE11       |
|     17 |     1 | C23              | OPTIONAL : 0.1µF±10%, 100V, X7R ceramic capacitor (0603) | MURATA GCJ188R72A104KA01       | YAGEO CC0603KRX7R0BB104        |
|     18 |     1 | L1               | OPTIONAL : 8.2µH±20%, Inductor                           | Coilcraft XAL5050-822ME        |                                |
|     19 |     1 | R4               | OPEN (0603)                                              |                                |                                |

Evaluates: MAXM17546 5V Output

## Component Suppliers

| SUPPLIER               | WEBSITE               |
|------------------------|-----------------------|
| Murata Americas        | www.murata.com        |
| Panasonic Corp.        | www.panasonic.com     |
| TDK Corp.              | www.component.tdk.com |
| Vishay Intertechnology | www.vishay.com        |
| Yageo                  | www.yageo.com         |
| Coilcraft Inc          | www.coilcraft.com     |

Note: Indicate that you are using the MAXM17546 when contacting these component suppliers.

## MAXM17546EVKITBE# 5V Output Evaluation Kit

## MAXM17546EVKITBE# Schematic

<!-- image -->

## Evaluates: MAXM17546 5V Output

## MAXM17546EVKITBE# 5V Output Evaluation Kit

## MAXM17546EVKITBE# PCB Layout

Figure 1. MAXM17546EVKITBE# 5V Output EV kit PCB Layout-Top Silkscreen

<!-- image -->

Evaluates: MAXM17546 5V Output

## MAXM17546EVKITBE# PCB Layout (continued)

Figure 2. MAXM17546EVKITBE# 5V Output EV kit PCB Layout-Top Layer

<!-- image -->

## MAXM17546EVKITBE# PCB Layout (continued)

Figure 3. MAXM17546EVKITBE# 5V Output EV kit PCB Layout-Layer 2

<!-- image -->

## MAXM17546EVKITBE# PCB Layout (continued)

Figure 4. MAXM17546EVKITBE# 5V Output EV kit PCB Layout-Layer 3

<!-- image -->

## MAXM17546EVKITBE# PCB Layout (continued)

Figure 5. MAXM17546EVKITBE# 5V Output EV kit PCB Layout-Bottom Layer

<!-- image -->

## MAXM17546EVKITBE# PCB Layout (continued)

Figure 6. MAXM17546EVKITBE# 5V Output EV kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAXM17546EVKITBE# 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAXM17546 5V Output