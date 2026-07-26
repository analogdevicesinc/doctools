<!-- lastmod 2022-08-03 -->
## General Description

The MAX9657 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that evaluates the MAX9657 low-power quad video amplifier with input sync-tip clamps and fixed gain of 2V/V (6dB). It has a bandwidth of 15MHz, making it suitable not only for standard-definition video signals, but also video graphics array (VGA) signals with 640 x 480 resolution at up to  85Hz refresh rate. The EV kit features a shutdown mode to control the device operation. The EV kit operates from a single-supply voltage of 2.7V to 3.6V.

The MAX9657 EV kit can also be used to evaluate the MAX9658, which is similar to the MAX9657 except that it has  integrated  lowpass  filters.  To  evaluate  the MAX9658, request a free sample with the MAX9657 EV kit and replace U1 with the pin-compatible MAX9658 IC.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1-C5         |     5 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K Murata GRM188R71C104K    |
| C6            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG |
| C7-C10        |     0 | Not installed, aluminum electrolytic capacitors (10mm x 7.7mm)                            |

<!-- image -->

## Features

- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ AC-Coupled Video Inputs
- ♦ Shutdown Mode
- ♦ Standard 75 Ω Input/Output Termination
- ♦ Surface-Mount Components
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9657EVKIT+ | EV Kit |

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                                                        |
|--------------------------------|-------|--------------------------------------------------------------------|
| INPUT0-INPUT3, OUTPUT0-OUTPUT3 |     8 | 75 Ω BNC PCB-mount connectors                                      |
| JU1                            |     1 | 3-pin header Sullins PEC36SAAN or equivalent Digi-Key S1012E-36-ND |
| R1-R8                          |     8 | 75 Ω ±1% resistors (0603)                                          |
| U1                             |     1 | Quad video amplifier (16 QSOP) Maxim MAX9657AEE+                   |
| -                              |     1 | Shunt (JU1)                                                        |
| -                              |     1 | PCB: MAX9657 Evaluation Kit+                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX9657 when contacting these component suppliers.

## MAX9657 Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.7V to 3.6V DC power supply (VDD)
- Four composite video signal generators
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)

## Procedure

The MAX9657 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU1 (EV kit enabled).
- 2) Connect the positive terminal of the DC power supply to the VDD pad on the EV kit. Connect the ground terminal of the DC power supply to the GND pad.
- 3) Connect the composite video test signals from the video signal generators to the INPUT0-INPUT3 BNC connectors.
- 4) Connect the output signals from the OUPUT0OUPUT3 BNC connectors to the inputs of the video measurement equipment.
- 5) Turn on the power supply and turn on the signal generator.
- 6) Verify the output signals.

## Detailed Description of Hardware

## Input

Each video input signal of the MAX9657 EV kit is configured for AC-coupling. The EV kit provides each input with an AC-coupling 0.1µF capacitor and a termination resistor.  A  sync-tip  clamp  at  each  input  provides  bias for  the  incoming  video  signal.  The  sync-tip  voltage  is internally set to 300mV.

## Output

The video output amplifiers can both source and sink load current, allowing output loads to be DC- or ACcoupled. The amplifier output stage needs approximately 300mV of headroom from either supply rail. The devices have an internal level-shift circuit that positions the sync tip at approximately 300mV at the output. If the supply voltage is greater than 3.135V (5% below a 3.3V supply), each amplifier can drive two DC-coupled video loads to ground. If the supply is less than 3.135V, each amplifier can drive only one DC-coupled or ACcoupled video load.

The MAX9657 EV kit comes with DC-coupled outputs, but can also be configured for AC-coupled outputs. To configure the EV kit for AC-coupled outputs, cut the short traces across C7-C10 and install 220µF or greater AC-coupling output capacitors. Refer to the Applications Information, AC-Coupling the Outputs section in the MAX9657 IC data sheet for more information.

## Jumper Selection

## Shutdown Mode ( SHDN )

The MAX9657 EV kit features an option to shut down all the  video  outputs  on  the  EV  kit.  For  normal  operation, connect SHDN to VDD by placing a shunt across pins 1-2 of jumper JU1. For low-power shutdown mode, connect SHDN to GND by placing a shunt across pins 2-3 of  jumper JU1. Table 1 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions ( SHDN )

| SHUNT POSITION   | SHDN PIN         | DEVICE MODE      |
|------------------|------------------|------------------|
| 1-2*             | Connected to VDD | Normal operation |
| 2-3              | Connected to GND | Shutdown mode    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9657 Evaluation Kit

Figure 1. MAX9657 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9657 Evaluation Kit

Figure 2. MAX9657 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9657 Evaluation Kit

<!-- image -->

Figure 3. MAX9657 EV Kit Component PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9657 Evaluation Kit

Figure 4. MAX9657 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600