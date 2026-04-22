<!-- lastmod 2023-09-11 -->
<!-- image -->

## General Description

The MAX42403 evaluation kit (EV kit) provides a proven design to evaluate the MAX42402/MAX42403, high inputvoltage, mini buck converter in a 15-pin,  FC2QFN package. Various test points and jumpers are included for evaluation. The MAX42403  EV  kit comes  with the MAX42403AFLB+  installed  (3.3V,  1.5MHz).  This  EV  kit can be used to evaluate all variants of the MAX42402/MAX42403 with minimal component changes.

## Benefits and Features

- 4.5V to 36V Input Supply Range
- Adjustable Output Between 0.8V and 12V
- Delivers up to 3.5A Output Current (up to 2.5A for the MAX42402)
- Frequency Synchronization Input
- 99% Duty Cycle Operation with Low Dropout
- Voltage-Monitoring PGOOD Output with UV/OV Feature
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

319-101021; Rev 0; 9/23

## MAX42403 Evaluation Kit

Evaluates: MAX42402/MAX42403

## Quick Start

## Required Equipment

- MAX42403 EV Kit
- Power Supply
- Voltmeter
- Electronic Load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

1.  While observing safe ESD practices, carefully remove the  MAX42403  EV  kit  board  out  of  its  packaging. Quickly inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
2.  Verify that all jumpers are in their default positions, as shown in Table 1 .
3.  Connect  the  positive  and  negative  terminals  of  the power  supply  to  the  V SUP   and  GND2  test  pads, respectively.
4.  Connect the positive terminal of the voltmeter to V OUT , and the negative terminal to GND3.
5.  Set the power supply to 14V and 3A current limit. Turn on the power supply.
6.  The voltmeter should display an output voltage of 3.3V.
7.  Connect  an  electronic  load  to  VOUT  and  GND3 terminals and set it to 1A.
8.  Turn on the electronic load and increase the current to 3.5A. The voltmeter should display the output voltage of 3.3V.

Tel: 781.329.4700

## Board Photos

Figure 1. MAX42403 EV Kit Board Photo -Top

<!-- image -->

Figure 2. MAX42403 EV Kit Board Photo -Bottom

<!-- image -->

## Detailed Description

This evaluation kit should be used with the following documents:

- MAX42402/MAX42403 data sheet
- MAX42403 EV kit data sheet (this document)

The MAX42403 EV kit provides a proven layout for all variants of the MAX42402/MAX42403 synchronous buck converter. The device accepts input voltages as high as 36V and delivers up to 3.5A (2.5A for the MAX42402). The EV kit can handle an input-supply transient up to 42V.

## Switching Frequency/External Synchronization

The device can operate in two modes: forced PWM or skip. Skip mode has better efficiency for light-load conditions. When SYNC is pulled low, the device operates in skip mode for light loads and in PWM mode for larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions. Use jumper J2 to switch modes.

SYNC can also be used to synchronize with an external clock. The device operates in FPWM mode when SYNC is connected to an external clock. To do this, uninstall the J2 shunt and connect an external clock at the SYNC pin.

## Buck Output Monitoring (PGOOD)

The EV kit provides a power-good output test point (PGOOD) to monitor the status of the buck output. PGOOD is high impedance when the output voltage is in regulation. PGOOD is low impedance when the output voltage drops below 7% (typ) or exceeds 4% (typ) of its nominal regulated voltage. To obtain a logic signal, pull up PGOOD to V BIAS  by installing a shunt on jumper J3.

## Programming Buck Output Voltage

The MAX42402/MAX42403 has an adjustable 0.8V to 12V output. An external divider connected between the buck output (FB) and GND is used to set the output voltage. To program the output voltage, place the appropriate resistors in the positions of R4 and R5 according to the following equation:

<!-- formula-not-decoded -->

Where  V FB   =  0.8V  and  R 5   =  10k Ω50k Ω and  replace  the  output  capacitors  C12 -C17  with  appropriate  capacitors according to the adjustable tables in the data sheet.

A feedforward capacitor, C19, in parallel with R 4  is also recommended to improve loop stability and bandwidth. Refer to the MAX42402/MAX42403 IC data sheet for C19 value.

## Evaluating Other Variants

The MAX42403 EV kit comes installed with the 3.3V/1.5MHz, 3.5A variant (MAX42403AFLB+). Additionally, a 400kHz variant with inductor for 3.3V output is also available. The other MAX42402/MAX42403 variants can be installed with minimal component changes.

## Evaluation Data

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                             |
|----------|------------------|------------------------------------------------------|
| J1_EN    | Pin 1-2          | Buck controller enabled                              |
| J2_SYNC  | Pin 1-2          | Forced-PWM mode                                      |
| J3_PGOOD | Installed        | PGOOD is pulled up to BIAS when OUT is in regulation |
| J4_SPS   | Pin 1-2          | Spread spectrum disabled                             |

## Ordering Information

| PART           | TYPE                       |
|----------------|----------------------------|
| MAX42403EVKIT# | 3.3V Output, 1.5MHz EV Kit |

# Denotes RoHS-compliant.

## MAX42403 EV Kit Bill of Materials

| PART                                     | MFG PART #                             | MANUFACTURER       | VALUE   | DESCRIPTION                                                                   |
|------------------------------------------|----------------------------------------|--------------------|---------|-------------------------------------------------------------------------------|
| BIAS, EN, PGOOD, SYNC                    | 5012                                   | KEYSTONE           | N/A     | Test Point Pin Diameter 0.125 inches                                          |
| C0                                       | UMK107AB7105KA;CC0603 KRX7R9BB105      | TAIYO YUDEN;YAGEO  | 1µF     | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                  |
| C1-C3, C6, C9, C11, C18, C20             | CGA3E2X7R1H104K080AE; UMK107B7104KAH   | TDK                | 0.1µF   | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                |
| C4                                       | EEE-TG1H220P                           | PANASONIC          | 22µF    | CAP; SMT (CASE_E); 22UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                      |
| C5, C10                                  | C2012X7R1H225K125AC                    | TDK                | 2.2µF   | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                |
| C7                                       | CGA2B3X7R1H104M050BB                   | TDK                | 0.1µF   | CAP; SMT (0402); 0.1UF; 20%; 50V; X7R; CERAMIC                                |
| C8                                       | GRM188Z71C225KE43;EMK 107BB7225KA      | MURATA;TAIYO YUDEN | 2.2µF   | CAP; SMT (0603); 2.2UF; 10%; 16V; X7R; CERAMIC                                |
| C12, C13, C15- C17                       | CGA4J1X7S1C106K125                     | TDK                | 10µF    | CAP; SMT (0805); 10UF; 10%; 16V; X7S; CERAMIC                                 |
| C19                                      | GRM1885C1H470JA01                      | MURATA             | 47pF    | CAP; SMT (0603); 47PF; 5%; 50V; C0G; CERAMIC                                  |
| C21, C22                                 | GRM21BZ71H475KE15;C20 12X7R1H475K125AC | MURATA;TDK         | 4.7µF   | CAP; SMT (0805); 4.7UF; 10%; 50V; X7R; CERAMIC                                |
| GND, GND2- GND5, VOUT, VSUP, VSUP_FILTER | 5020                                   | KEYSTONE           | N/A     | Test Point Diameter 0.094 inches                                              |
| J1_EN, J2_SYNC, J4_SPS                   | PEC03SAAN                              | SULLINS            | N/A     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                     |
| J3_PGOOD                                 | PEC02SAAN                              | SULLINS            | N/A     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                     |
| L1                                       | FBMH3225HM102N                         | TAIYO YUDEN        | 1000    | INDUCTOR; SMT (1210); FERRITE- BEAD; 1000 IMPEDANCE AT 100MHZ; TOL=+/-30%; 2A |

| L2             | XGL4020-222ME                                  | COILCRAFT               | 2.2µH   | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 8.9A                                |
|----------------|------------------------------------------------|-------------------------|---------|---------------------------------------------------------------------------|
| L3             | XGL4030-222ME                                  | COILCRAFT               | 2.2µH   | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 8.7A                                |
| MH1-MH4        | 9032                                           | KEYSTONE                | 9032    | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON |
| R1             | CRCW040220K0FK                                 | VISHAY DALE             | 20K     | RES; SMT (0402); 20K; 1%; +/- 100PPM/DEGC; 0.0630W                        |
| R3             | CRCW06030000Z0EAHP                             | VISHAY DRALORIC         | 0       | RES; SMT (0603); 0; JUMPER; JUMPER; 0.2500W                               |
| R4             | CRCW060349K9FK;ERJ- 3EKF4992                   | VISHAY DALE;PANASONIC   | 49.9K   | RES; SMT (0603); 49.9K; 1%; +/- 100PPM/DEGC; 0.1000W                      |
| R5             | AC0603FR- 0715K8L;CRCW060315K8FK ;ERJ-3EKF1582 | YAGEO;VISHAY;PAN ASONIC | 15.8K   | RES; SMT (0603); 15.8K; 1%; +/- 100PPM/DEGC; 0.1000W                      |
| U1             | MAX42403AFLB+                                  | ANALOG DEVICES          | N/A     | IC MAX42403 1.5MHz                                                        |
| MAX42403AFL A+ | MAX42403AFLA+                                  | ANALOG DEVICES          | N/A     | IC MAX42403 400kHz                                                        |
| 6.8UH          | XAL5050-682ME                                  | COILCRAFT               | 6.8µH   | EVKIT PART - INDUCTOR; SMT; COMPOSITE CORE; 6.8UH; TOL=+/- 20%; 6.4A      |

## MAX42403 EV Kit Schematic

<!-- image -->

## MAX42403 EV Kit PCB Layout

<!-- image -->

MAX42403 EV Kit Layout -Top Silk Layer

<!-- image -->

MAX42403 EV Kit Layout -Bottom Silk Layer

MAX42403 EV Kit Layout -Top Layer

<!-- image -->

MAX42403 EV Kit Layout -Bottom Layer

<!-- image -->

## MAX42403 EV Kit PCB Layout (continued)

MAX42403 EV Kit Layout -Internal Layers are Ground Planes

<!-- image -->

## Revision History

MAX42403 EV Kit Layout -Internal Layer

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/23            | Initial Release | -               |

<!-- image -->

<!-- image -->

INFORMATION FURNISHED BY ANALOG DEVICES IS BELIEVED TO BE ACCURATE AND RELIABLE. HOWEVER, NO RESPONSIBILITY IS ASSUMED BY ANALOG DEVICES FOR ITS USE, NOR FOR ANY INFRINGEMENTS OF PATENTS OR OTHER RIGHTS OF THIRD PARTIES THAT MAY RESULT FROM ITS USE. SPECIFICATIONS ARE SUBJECT TO CHANGE WITHOUT NOTICE. NO LICENCE, EITHER EXPRESSED OR IMPLIED, IS GRANTED UNDER ANY ADI PATENT RIGHT, COPYRIGHT, MASK WORK RIGHT, OR ANY OTHER ADI INTELLECTUAL PROPERTY RIGHT RELATING TO ANY COMBINATION, MACHINE, OR PROCESS WHICH ADI PRODUCTS ALL INFORMATION CONTAINED HEREIN IS PROVIDED 'AS IS' WITHOUT REPRESENTATION OR WARRANTY. NO RESPONSIBILITY IS OR SERVICES ARE USED. TRADEMARKS AND REGISTERED TRADEMARKS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.