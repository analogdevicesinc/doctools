<!-- lastmod 2022-08-02 -->
## MAXM17546 5V Output Evaluation Kit

## General Description

The Himalaya series of voltage regulator ICs and power modules enable cooler, smaller, and simpler power-supply  solutions.  The  MAXM17546 5V-output evaluation kit (EV kit) is a demonstration circuit of the MAXM17546 42V, 5A high-efficiency, current-mode, synchronous step-down DC-DC  switching  power  module.  The  EV  kit  operates over  a  wide  input-voltage  of  7.5V  to  42V  and  provides up to 5A load current with a 5V-output voltage. The EV kit  is  programmed  to  switch  at  a  frequency  of  450kHz. The module is simple to use and easily configurable with minimal  external  components.  It  features  cycle-by-cycle peak current-limit protection, under-voltage lockout (EN/ UVLO), and thermal shutdown.

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

Ordering Information appears at end of data sheet.

Evaluates: MAXM17546 5V Output

## Quick Start

## Recommended Equipment

- MAXM17546EVKITB# evaluation kit
- 7.5V to 42V DC, 4A power supply
- Dummy load capable of sinking 5A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Equipment Setup and Test Procedure

The MAXM17546 EV kit is fully  assembled  and  tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 7.5V and 42V. Disable the power supply.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to VIN and GND PCB pads, respectively.
- 3) Connect the positive and negative terminals of the 5A load to VOUT and GND PCB pads respectively, and the set the load to 0A.
- 4) Connect the DVM across the VOUT PCB pad and the GND PCB pad.
- 5) Verify that shunts are not installed on jumper J1 (see Figure 2 for details).
- 6) Select the shunt position on jumper J2 according to the intended mode of operation (see Table 2 for details).
- 7) Enable the input power supply.
- 8) Verify the DVM display 5V.
- 9) Increase the load up to 5A to verify the output voltage is 5V using DVM.

<!-- image -->

## MAXM17546 5V Output Evaluation Kit

## Detailed Description of Hardware

The MAXM17546 EV kit is a proven circuit to demonstrate the  high-voltage,  high-efficiency,  and  compact  solution size of the MAXM17546 synchronous step-down DC-DC power module. The output voltage is preset to 5V to operate  from  7.5V  to  42V  input  and  provides  up  to  5A  load current. The optimal frequency is set at 450kHz to maximize efficiency and minimize component size. The EV kit includes four test points, TP1 for monitoring the RESET , TP2 for measuring the LX voltage, TP3 for monitoring the DL voltage and TP4 for measuring the BST voltage.

## Soft-Start Input (SS)

The MAXM17546 module implements adjustable soft-start operation to reduce inrush current. A capacitor connected from  the  SS  pin  to  SGND  programs  the  soft-start  time. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

where t SS  is in ms and C SS  is in nF. For example, to program a 4ms soft-start time, a 22nF capacitor should be connected from the SS pin to SGND.

## Regulator Enable/ Undervoltage-Lockout Level (EN/UVLO)

The EV kit offers an adjustable input undervoltage-lockout level by resistor-dividers connecting between the IN, EN/ UVLO,  and  GND  pins.  For  normal  operation,  a  shunt

## Evaluates: MAXM17546 5V Output

should not be installed across pins 1-2 on JU1 to enable the output through an internal pullup 3.32MΩ resistor from the  EN/UVLO  pin  to  the  IN  pin.  To  disable  the  output, install  the  shunt  across pins 1-2 on JU1 to pull the EN/ UVLO pin to GND. See Table 1 for JU1 setting details. The  EV  kit  also  provides  an  R3  resistor  to  program  a UVLO threshold voltage at which an input-voltage  level device turns on. The R3 resistor can be calculated by the following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on, and R3 is in kΩ.

## MODE/SYNC Selection (MODE)

The device's MODE pin can be used to select among the PWM, PFM, or DCM modes of operation. The logic state of the MODE pin is latched when the V CC  and EN/UVLO voltages  exceed  the  respective  UVLO  rising  thresholds and all internal voltages are ready to allow LX switching. State changes on the MODE pin are ignored during normal  operation.  Refer  to  the  MAXM17546  IC  data  sheet for more information on the PWM, PFM, and DCM modes of operation.

Table  2  lists  JU2  jumper  settings  that  can  be  used  to configure  the  desired  mode  of  operation.  The  internal oscillator of the device can be synchronized to an external clock signal on the SYNC pin. The external synchronization clock frequency must be between 1.1 x f SW  and 1.4 x f SW , where f SW   is the frequency of operation set by R4. The minimum external clock high pulse width should be greater than 50ns, while the minimum external clock low pulse width should be greater than 160ns.

## Table 1. EN/UVLO Enable/Disable Configuration (JU1)

| SHUNT POSITION   | EN PIN                                                         | MAXM17546_OUTPUT                                            |
|------------------|----------------------------------------------------------------|-------------------------------------------------------------|
| 1-2              | Connected to GND                                               | Disabled                                                    |
| Not installed*   | Connected to the center node of resistor-divider 3.32MΩ and R3 | Enabled, UVLO level set through the 3.32MΩ and R3 resistors |

*Default position

## Table 2. MODE Description (JU2)

| SHUNT POSITION   | MODE PIN          | MAXM17546_MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to GND  | PWM mode of operation |

*Default position

│

## MAXM17546 5V Output Evaluation Kit

## Table 3. EXTVCC Configuration (JU3)

| SHUNT POSITION   | EXTVCC PIN         | MAXM17546_EXTVCC   |
|------------------|--------------------|--------------------|
| Not installed    | Unconnected        | EXTVCC unused      |
| 1-2              | Connected to GND   | EXTVCC = GND       |
| 2-3*             | Connected to V OUT | EXTVCC = V OUT     |

*Default position

## MAXM17546 EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM17546 5V Output

│

## MAXM17546 5V Output Evaluation Kit

## Evaluates: MAXM17546 5V Output

## MAXM17546 EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAXM17546EVKITB# | EV Kit |

#Denotes RoHS compliant.

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| TDK Corp.       | www.tdk.com       |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |

Note: Indicate that you are using the MAXM17546 when contacting these component suppliers.

│

## MAXM17546 5V Output Evaluation Kit

## MAXM17546 EV Kit Bill of Materials

TITLE: Bill of Materials DATE: 03/16/2018 DESIGN: maxm17546\_evkit\_b

|   ITEM | QTY REF DES     | Var Status   | MAXINV              | MFG PART #                                              | MANUFACTURER               | VALUE     | DESCRIPTION                                                                                                                                                                 |
|--------|-----------------|--------------|---------------------|---------------------------------------------------------|----------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | 2 C1, C2        | Pref         | 20-0010U-B40        | GRM32ER71H106KA12; CL32B106KBJNNN                       | MURATA;SAMSUNG ELECTRONICS | 10UF      | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                   |
|      2 | 1 C3            | Pref         | 20-0047U-A17        | EEE-FK1K470P                                            | PANASONIC                  | 47UF      | CAPACITOR; SMT (CASE_G); ALUMINUM-ELECTROLYTIC; 47UF; 80V; TOL=20%                                                                                                          |
|      3 | 1 C4            | Pref         | 20-0U022-91         | C0603C223K5RAC; GRM188R71H223K; C1608X7R1H223K080AA     | KEMET;MURATA;TDK           | 0.022UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                |
|      4 | 3 C5, C6, C12   | Pref         | 20-0022U-C8         | C1210C226M4RAC;C3225X7R1C226M250AC;GR M32ER71C226MEA8   | KEMET;TDK;MURATA           | 22UF      | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 16V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOTE: NOT RECOMMENDED FOR NEW DESIGN-USE 20-0022u-G9                             |
|      5 | 1 C11           | Pref         | 20-002P2-N6         | 06035J2R2BBT; GRM39C0G2R2B50V                           | AVX;MURATA                 | 2.2PF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2PF; 50V; TOL=+-0.1PF; MODEL=ACCU-P; TG=-55 DEGC TO +125 DEGC                                                                        |
|      6 | 2 C19, C20      | Pref         | 20-000U1-04A        | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 | TDK;TDK;MURATA             | 0.1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                  |
|      7 | 3 IN, OUT, PGND | Pref         | 01-9020BUSS20AWG-00 | 9020 BUSS                                               | WEICO WIRE                 | MAXIMPAD  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                    |
|      8 | 1 J1            | Pref         | 01-PBC02SABN2P-21   | PBC02SABN                                               | SULLINS                    | PBC02SABN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                   |
|      9 | 2 J2, J3        | Pref         | 01-PBC03SABN3P-21   | PBC03SABN                                               | SULLINS                    | PBC03SABN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                   |
|     10 | 4 J4-J7         | Pref         | 02-57541P-01        | 575-4                                                   | KEYSTONE                   | 575-4     | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L; NICKEL PLATED BRASS                                                                       |
|     11 | 1 R1            | Pref         | 80-0191K-24         | CRCW0603191KFK                                          | VISHAY DALE                | 191K      | RESISTOR; 0603; 191K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                     |
|     12 | 1 R2            | Pref         | 80-042K2-24         | CRCW060342K2FK                                          | VISHAY DALE                | 42.2K     | RESISTOR; 0603; 42.2K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                    |
|     13 | 1 R3            | Pref         | 80-0665K-10         | CRCW0603665KFK                                          | VISHAY DALE                | 665K      | RES; SMT (0603); 665K; 1%; +/-100PPM/DEGK; 0.1W                                                                                                                             |
|     14 | 1 R5            | Pref         | 80-0010K-24         | CRCW060310K0FK;ERJ-3EKF1002                             | VISHAY DALE;PANASONIC      | 10K       | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                          |
|     15 | 1 R8            | Pref         | 80-0000R-27         | CRCW06030000ZS;MCR03EZPJ000;ERJ-3GEY0R00                | VISHAY DALE;ROHM;PANASONIC | 0         | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                        |
|     16 | 3 SU1-SU3       | Pref         | 02-JMPFSTC02SYAN-00 | STC02SYAN                                               | SULLINS ELECTRONICS CORP.  | STC02SYAN | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                     |
|     17 | 4 TP1-TP4       | Pref         | 02-TPMINI5000-00    |                                                         | 5000 KEYSTONE              | N/A       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|     18 | 1 U1            | Pref         | 00-SAMPLE-01        | MAXM17546                                               | MAXIM                      | MAXM17546 | EVKIT PART-IC; LGA 15MMX9MMX4.42MM; 32LD; 1.27 PITCH                                                                                                                        |
|     19 | 1 VCC           | Pref         | 02-TPCOMP5005-00    |                                                         | 5005 KEYSTONE              | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN                |
|     20 | 1 PCB           | -            | EPCBM17546          | MAXM17546                                               | MAXIM                      | PCB       | PCB:MAXM17546                                                                                                                                                               |

## MAXM17546 5V Output Evaluation Kit

## MAXM17546 EV Kit Schematic

<!-- image -->

## MAXM17546 5V Output Evaluation Kit

## MAXM17546 EV Kit PCB Layout

Figure 1. MAXM17546 5V Output EV kit PCB Layout-Top Silkscreen

<!-- image -->

│

## MAXM17546 EV Kit PCB Layout (continued)

Figure 2. MAXM17546 5V Output EV kit PCB Layout---Top Layer

<!-- image -->

## MAXM17546 EV Kit PCB Layout (continued)

Figure 3. MAXM17546 5V Output EV kit PCB Layout-Layer 2

<!-- image -->

## MAXM17546 EV Kit PCB Layout (continued)

Figure 4. MAXM17546 5V Output EV kit PCB Layout-Layer 3

<!-- image -->

## MAXM17546 EV Kit PCB Layout (continued)

Figure 5. MAXM17546 5V Output EV kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAXM17546 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAXM17546 5V Output