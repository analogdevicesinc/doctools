<!-- lastmod 2022-08-02 -->
## MAXM17536 5V Output Evaluation Kit

## General Description

The Himalaya series of voltage regulator ICs and power modules enable cooler, smaller, and simpler power-supply solutions. The MAXM17536EVKIT# 5V-output evaluation kit (EV kit) is a demonstration circuit of the MAXM17536 60V, 4A high-efficiency, current-mode, synchronous stepdown DC-DC switching power module. The EV kit operates over a wide input-voltage of 7V to 60V and provides up to  4A  load  current  with  a  5V-output  voltage. The  EV  kit is programmed to switch at a frequency of 450kHz. The module is simple to use and easily configurable with minimal external  components.  It  features  cycle-by-cycle  peak current-limit protection, undervoltage lockout (EN/UVLO), and thermal shutdown.

The EV kit comes with the compact 29-pin 15mm x 9mm x 4.32mm SiP package MAXM17536 module installed and is rated to operate over the full industrial -40°C to +125°C temperature range.

The MAXM17536 module data sheet provides a complete description of the part that should be read in conjunction with this data sheet prior to operating the EV kit. For full module  features,  benefits  and  parameters,  refer  to  the MAXM17536 data sheet.

## Features

- Wide 7V to 60V Input Range
- Highly Integrated Solution with Built-In Shielded Inductor
- Programmed 5V Output, Up To 4A Output Current
- 450kHz Switching frequency
- MAXM17536 Offers High 92.1% Efficiency (V IN  = 24V, V OUT  = 5V, I OUT  = 2.5A)
- All Ceramic Capacitors and Ultra-Compact Solution
- Selectable PWM, DCM, and PFM Modes
- Programmable 4ms Soft-Start Time and Prebias Startup
- Open-Drain RESET Output Pulled Up To 5V V CC
- Programmable EN/UVLO Threshold
- Provision for External Frequency Synchronization
- Hiccup Overcurrent Protection (OCP)
- Overtemperature Protection (OTP)
- -40°C to +125°C Industrial Temperature Range
- Complies with CISPR22 (EN55022) Class B Conducted and Radiated Emissions

Evaluates: MAXM17536 5V Output

## Quick Start

## Recommended Equipment

- MAXM17536EVKIT# evaluation kit
- 7V to 60V DC, 4A power supply
- Dummy load capable of sinking 4A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Equipment Setup and Test Procedure

The MAXM17536EVKIT# is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 7V and 60V. Disable the power supply.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to VIN and GND PCB pads, respectively.
- 3) Connect the positive and negative terminals of the 4A load to VOUT and GND PCB pads, respectively. Set the load to 0A.
- 4) Connect the DVM across the VOUT PCB pad and the GND PCB pad.
- 5) Verify that shunts are not installed on jumper J1 (see Table 1 for details).
- 6) Select the shunt position on jumper J2 according to the intended mode of operation (see Table 2 for details).
- 7) Enable the input power supply.
- 8) Verify that the DVM displays 5V.
- 9) Increase the load up to 4A to verify the output voltage is 5V using DVM.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17536 5V Output Evaluation Kit

## Detailed Description of Hardware

The MAXM17536EVKIT# is a proven circuit to demonstrate the  high-voltage,  high-efficiency,  and  compact  solution size of the MAXM17536 synchronous step-down DC-DC power  module.  The  output  voltage  is  preset  to  5V  to operate from 7V to 60V input and provides up to 4A load current.  The  optimal  frequency  is  set  at  450kHz  to maximize  efficiency  and  minimize  component  size.  The EV kit includes test points, for monitoring the RESET , LX voltage, DL voltage, BST, and V CC  voltage.

## Soft-Start Input (SS)

The MAXM17536 module implements adjustable soft-start operation to reduce inrush current. A capacitor connected from  the  SS  pin  to  SGND  programs  the  soft-start  time. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

where  t SS   is  in  ms  and  C SS   is  in  nF.  For  example,  to program a 4ms soft-start time, a 22nF capacitor should be connected from the SS pin to SGND.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The EV kit offers an adjustable input undervoltage-lockout level by resistor-dividers connecting between the IN, EN/ UVLO,  and  GND  pins.  For  normal  operation,  a  shunt

## Evaluates: MAXM17536 5V Output

should not be installed across pins 1-2 on J1 to enable the output through an internal pullup 3.32MΩ resistor from the EN/UVLO pin to the IN pin. To disable the output, install the shunt across pins 1-2 on J1 to pull the EN/UVLO pin to GND. See Table 1 for J1 setting details. The EV kit also provides  an  R3  resistor  to  program  a  UVLO  threshold voltage  at  which  an  input-voltage  level  device  turns  on. The R3 resistor can be calculated by the following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on, and R3 is in kΩ.

## MODE/SYNC Selection (MODE)

The device's MODE pin can be used to select among the PWM, PFM, or DCM modes of operation. The logic state of the MODE pin is latched when the V CC  and EN/UVLO voltages  exceed  the  respective  UVLO  rising  thresholds and  all  internal  voltages  are  ready  to  allow  LX  switching. State  changes  on  the  MODE  pin  are  ignored  during normal operation. Refer to the MAXM17536 module data sheet for more information on the PWM, PFM, and DCM modes of operation.

Table 2 lists J2 jumper settings that can be used to configure the desired mode of operation. The internal oscillator of the device can be synchronized to an external clock signal on  the  SYNC  pin.  The  external  synchronization  clock frequency  must  be  between  1.1  x  f SW   and  1.4  x  f SW , where f SW  is the frequency of operation set by R4. The minimum external clock high pulse width should be greater than  50ns,  while  the  minimum  external  clock  low  pulse width should be greater than 160ns.

## Table 1. EN/UVLO Enable/Disable Configuration (J1)

| SHUNT POSITION   | EN PIN                                                         | MAXM17536_OUTPUT                                            |
|------------------|----------------------------------------------------------------|-------------------------------------------------------------|
| 1-2              | Connected to GND                                               | Disabled                                                    |
| Not installed*   | Connected to the center node of resistor-divider 3.32MΩ and R3 | Enabled, UVLO level set through the 3.32MΩ and R3 resistors |

*Default position

## Table 2. MODE Description (J2)

| SHUNT POSITION   | MODE PIN          | MAXM17536_MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to GND  | PWM mode of operation |

*Default position

│

## MAXM17536 5V Output Evaluation Kit

## EXTVCC Linear Regulator

Powering  V CC   of  the  IC  from  EXTVCC  increases the  efficiency  of  the  power  converter  at  higher  input voltages. If the applied EXTVCC voltage is greater than 4.7V (typ), V CC  is powered from EXTVCC. If EXTVCC is lower than 4.7V (typ), V CC  is powered from V IN . Refer to the MAXM17536 module data sheet for further information. To  connect  EXTVCC  to  V OUT   place  the  shunt  across pins 2-3 of jumper J3. Refer to Table 3 for summary of EXTVCC jumper configurations.

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter. The  EMI  filter attenuates high-frequency cur¬rents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components,  as  shown  in  the  EV  kit schematic,  results  in  lower  conducted  emissions  below

Table 3. EXTVCC Configuration (J3)

| SHUNT POSITION   | EXTVCC PIN         | EXTVCC FUNCTION       |
|------------------|--------------------|-----------------------|
| Not installed    | Unconnected        | V CC Powered by V IN  |
| 1-2              | Connected to GND   | V CC Powered by V IN  |
| 2-3*             | Connected to V OUT | V CC Powered by V OUT |

*Default position

## Evaluates: MAXM17536 5V Output

CISPR22  Class  B  limits.  The  MAXM17536EVKIT#  PCB layout  is  also  designed  to  limit  radiated  emissions  from switching nodes of the power converter resulting in radiated emissions below CISPR22 Class B limits. Further, capacitors 150pF/100V and 0.1μF/100V placed near the input of the board helps in attenuating high-frequency noise.

## Hot-Plug-In and Long Input Cables

The  MAXM17536EVKIT#  PCB  provides  an  electrolytic capacitor (C24, 47μF/80V) to dampen input voltage peaks and oscillations  that  can  arise  during  hot-plug-in  and/or due to  long  input  cables.  This  capacitor  limits  the  peak voltage  at  the  input  of  the  MAXM17536  power  module, when the EV kit  is  powered  directly  from  a  precharged capacitive source or an industrial backplane PCB. Long input  cables,  between  input  power  source  and  the  EV kit circuit can cause input-voltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR)  of  the  electrolytic  capacitor  helps  damp  out  the oscillations caused by long input cables.

## MAXM17536EVKIT# Performance Report

<!-- image -->

<!-- image -->

EFFICIENCY (%)

OUTPUT VOLTAGE vs. LOAD CURRENT (5V OUTPUT, PWM MODE, fSW = 450kHz)

<!-- image -->

STEADY-STATE SWITCHING WAVEFORMS (VIN = 24V, VOUT = 5V, IOUT = 4A, PWM MODE)

<!-- image -->

## Evaluates: MAXM17536 5V Output

<!-- image -->

OUTPUT VOLTAGE vs. LOAD CURRENT (5V OUTPUT, PFM MODE, fSW = 450kHz)

<!-- image -->

POWER-UP AND DOWN THROUGH EN/UVLO (VIN = 24V, VOUT = 5V, IOUT = 4A, PWM MODE)

<!-- image -->

│

VOUT  (AC)

I OUT

100mV/div

2A/div

400

µ

s/div toc10

LOAD TRANSIENT (VIN = 24V, VOUT = 5V, IOUT = 25mA TO 2A, PFM MODE)

VOUT  (AC)

I OUT

NW

400

µ

s/div

<!-- image -->

100mV/div

1A/div VOUT  (AC)

I OUT

toc13 CONDUCTED EMISSION PLOT (WITH FILTER, C18 = C19 = C20 = C21 = C22 = 4.7µF, L1 = 8.2µH)

CISPR-22 CLASS B QP LIMIT

60

50

40

30

20

10

0.15

30

CISPR-22 CLASS B AVG LIMIT

AVERAGE EMISSION

PEAK EMISSION

1

10

FREQUENCY (MHz)

CONDITIONS : VIN = 24V, VOUT = 5V, IOUT = 4A

FROM :  MAXM17536EVKIT#

AMPLITUDE (dBµV)

## MAXM17536EVKIT# Performance Report (continued)

LOAD TRANSIENT (VIN = 24V, VOUT = 5V, IOUT = 0A TO 2A, PWM MODE)

toc08

LOAD TRANSIENT (VIN = 24V, VOUT = 5V, IOUT = 2A TO 4A, PWM MODE)

toc09

VOUT  (AC)

I OUT

400

µ

s/div toc11

LOAD TRANSIENT (VIN = 24V, VOUT = 5V, IOUT = 25mA TO 2A, DCM MODE)

Amplitude (dBuV/m)

AMPLITUDE (dBµV/m)

70.0

400

µ

s/div

toc14 RADIATED EMISSION PLOT (NO FILTER, C18 = C19 = C20 = C21 = C22 = OPEN, L1 = SHORT) TUV Rheinland Maxim Ic\_MAXM17536 RE 30MHz-1GHz Final\_ScanV Final\_ScanH Limit

60.0

60

50

50.0

40.0

40

30

30.0

20

20.0

10

10.0

0

0

-10.0

30

30.0M

CISPR-22 CLASS B QP LIMIT

VERTICAL SCAN

HORIZONTAL SCAN

100

100.0M

Frequency (Hz)

FREQUENCY (MHz)

CONDITIONS : VIN = 24V, VOUT = 5V, IOUT = 4A

RE 30MHz-1GHz\_0-360Deg\_90Deg Step\_1-4Mtr Height\_Quick Scan\_Test2.TIL

FROM :  MAXM17536EVKIT#

09:50:36 AM, Monday, May 20, 2019

100mV/div

2A/div

100mV/div

1A/div

1000

1.0G

│

## MAXM17536 5V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17536EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAXM17536 5V Output

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| TDK Corp.       | www.tdk.com       |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |

Note: Indicate that you are using the MAXM17536 when contacting these component suppliers.

│

## MAXM17536 5V Output Evaluation Kit

## MAXM17536EVKIT# Bill of Materials

|   ITEM |   QTY | REF DES          | MFG PART #                 | DESCRIPTION                                              |
|--------|-------|------------------|----------------------------|----------------------------------------------------------|
|      1 |     2 | C2, C3           | TDK C1608C0G2A221J080AA    | 220pF ± 5%, 100V, Ceramic Cap, C0G, NP0 (0603)           |
|      2 |     4 | C4-C7            | MURATA GRM31CZ72A475KE11   | 4.7µF ± 10%, 100V, X7R, CAP (1206)                       |
|      3 |     4 | C8, C9, C15, C17 | MURATA GCJ188R72A104KA01D  | 0.1µF ± 10%, 100V, Ceramic Cap, X7R (0603)               |
|      4 |     1 | C10              | MURATA GRM1885C1H2R2CA01D  | 2.2pF ± 0.1pF, 50V, Ceramic CAP (0603)                   |
|      5 |     1 | C11              | MURATA GCJ188R71H223KA01D  | 0.022µF ± 10%, 50V, Ceramic Cap, X7R (0603)              |
|      6 |     3 | C12-C14          | MURATA GRM32ER71A476KE15   | 47µF ± 10%, 10V, Ceramic Cap, X7R (1210)                 |
|      7 |     1 | C16              | TDK C1005C0G2A151J050BA    | 150pF ± 5%, 100V, Ceramic Cap, C0G, NP0 (0402)           |
|      8 |     1 | C24              | PANASONIC EEE-FK1K470P     | 47μF ± 20%, 80V, Aluminium Electrolytic                  |
|      9 |     1 | R1               | PANASONIC ERJ-3EKF1743     | 174 kΩ ± 1%, 0.1W, Resistor (0603)                       |
|     10 |     1 | R2               | PANASONIC ERJ-3EKF3832     | 38.3 kΩ ± 1%, 0.1W, Resistor (0603)                      |
|     11 |     1 | R3               | VISHAY DALE CRCW0603715KFK | 715 kΩ ± 1%, 0.1W, Resistor (0603)                       |
|     12 |     1 | R5               | VISHAY DALE CRCW060310K0FK | 10 kΩ ± 1%, 0.1W, Resistor (0603)                        |
|     13 |     1 | R6               | VISHAY DALE CRCW06030000ZS | 0 Ω ± 1%, 0.1W, Resistor (0603)                          |
|     14 |     1 | U1               | MAXM17536ALY#              | MAXM17536 DC-DC Module                                   |
|     15 |     1 | C1               | TDK C1608C0G2A221J080AA    | OPTIONAL : 220pF ± 5% 100V, Ceramic Cap, C0G, NP0 (0603) |
|     16 |     5 | C18-C22          | MURATA GRM31CZ72A475KE11   | OPTIONAL : 4.7μF ± 10%, 100V, X7R ceramic cap (1206)     |
|     17 |     1 | C23              | MURATA GCJ188R72A104KA01   | OPTIONAL : 0.1μF ± 10%, 100V, X7R ceramic cap (0603)     |
|     18 |     1 | L1               | COILCRAFT XAL5050-822ME    | OPTIONAL : 8.2μH ± 20%, Inductor                         |
|     19 |     1 | R4               |                            | OPTIONAL : OPEN (0603)                                   |
|     20 |     1 | C25              |                            | OPTIONAL : OPEN (1210)                                   |

│

Evaluates: MAXM17536 5V Output

## MAXM17536 5V Output Evaluation Kit

## MAXM17536EVKIT# Schematic

<!-- image -->

│

## MAXM17536EVKIT# PCB Layout Diagrams

Figure 1. MAXM17536 5V Output EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Figure 2. MAXM17536 5V Output EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 3. MAXM17536 5V Output EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 4. MAXM17536 5V Output EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAXM17536 5V Output Evaluation Kit

## MAXM17536EVKIT# PCB Layout Diagrams (continued)

Figure 5. MAXM17536 5V Output EV Kit PCB Layout-Layer 4

<!-- image -->

Figure 6. MAXM17536 5V Output EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAXM17536 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAXM17536 5V Output