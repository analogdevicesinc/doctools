<!-- lastmod 2022-08-02 -->
## General Description

The MAX2165 evaluation kit (EV kit) simplifies testing and evaluation of the MAX2165 direct-conversion DVB-H tuner. The evaluation kit is fully assembled and tested at the factory. Standard 50 Ω SMA and BNC connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit  schematic,  a  bill  of  materials  (BOM)  for  the  kit, and artwork for each layer of the PCB.

| DESIGNATION                     |   QTY | DESCRIPTION                                         |
|---------------------------------|-------|-----------------------------------------------------|
| C1, C34                         |     2 | 27pF ±5% capacitors (0603) Murata GRM1885C1H270J    |
| C2, C6, C27, C37, C71, C72, C73 |     7 | 330pF ±5% capacitors (0603) Murata GRM1885C1H331J   |
| C3                              |     1 | 47pF ±5% capacitor (0603) Murata GRM1885C1H470J     |
| C4, C5, C11, C19, C23, C75, C77 |     7 | 100nF ±10% capacitors (0603) Murata GRM188R71E104K  |
| C7, C12, C18, C31, C38          |     5 | 1000pF ±10% capacitors (0603) Murata GRM188R71H102K |
| C8, C21, C22                    |     3 | 2200pF ±10% capacitors (0603) MurataGRM188R71H222K  |
| C9                              |     1 | 0.022µF ±10% capacitor (0603) Murata GRM188R71H223K |
| C10                             |     1 | 470nF ±10% capacitor (0603) Murata GRM188R61A474K   |
| C13, C16, C17, C20, C29         |     5 | 10nF ±10% capacitors (0603) Murata GRM188R71H103K   |
| C14, C15                        |     2 | 2.2µF ±10% capacitors (0603) Murata GRM188R61A225K  |

Component List continued on next page.

<!-- image -->

Features

- ♦ Easy Evaluation of the MAX2165
- ♦ 50 Ω SMA Connector
- ♦ All Critical Peripheral Components Included
- ♦ Fully Assembled and Tested
- ♦ PC Control Software (available at www.maxim-ic.com)

## Ordering Information

| PART          | TEMP RANGE         | IC PACKAGE                  |
|---------------|--------------------|-----------------------------|
| MAX2165EVKIT+ | -40 ° C to +85 ° C | 28 Thin QFN-EP* (5mm x 5mm) |

## Component List

| DESIGNATION                            |   QTY | DESCRIPTION                                                                             |
|----------------------------------------|-------|-----------------------------------------------------------------------------------------|
| C24, C30, C32, C33, C35, C39, C40, C41 |     0 | Open                                                                                    |
| C28                                    |     1 | 1.0µF ±10% capacitor (0603) Murata GRM188R61C105K                                       |
| C76                                    |     1 | 1.0µF ±10% tantalum capacitor C case, 16V AVX TAJC106K016                               |
| FREF3, MUX3                            |     0 | Open                                                                                    |
| J1, J2                                 |     2 | BNC PCB receptacle (jack) post terminal 4 legs 433 mils (11.0mm) Amphenol 31-5329-52RFX |
| J3                                     |     1 | SMA end launch jack receptacle 0.062in Johnson 142-0701-801                             |
| J4                                     |     0 | Do not install                                                                          |
| J13                                    |     1 | DB25 horizontal male PCB connector AMP HD-20 Series 5747238-4                           |
| JP1-JP9                                |     0 | Do not install                                                                          |
| JP10, JP13                             |     2 | In-line headers, 100 mil center Sullins PEC36SAAN                                       |

1

## MAX2165 Evaluation Kit

## Test Equipment Required

- One power supply capable of supplying at least 200mA, +2.85V
- One dual-output variable power supply capable of supplying up to +2.5V at up tp ±50µA (to apply gain control voltages).
- One RF signal generator capable of delivering at least -20dBm of output power at frequencies up to 1GHz
- One RF spectrum analyzer capable of covering the operating frequency range of the device.
- A PC (486DX33 or better) with Windows ® 98, 2000, NT 4.0, XP or later operating system, 64MB of memory, and an available parallel port
- A 25-pin straight-through parallel cable with male and female connectors
- One multichannel digital oscilloscope (optional)
- A network analyzer to measure return loss (optional)
- An ammeter to measure supply current (optional)

Windows is a registered trademark of Microsoft Corp.

## Component List (continued)

| DESIGNATION                  |   QTY | DESCRIPTION                                                  |
|------------------------------|-------|--------------------------------------------------------------|
| JP10, JP13                   |     2 | Shorting jumpers Sullins SSC02SYAN                           |
| J35, J36                     |     2 | SMA end launch jack receptacles 0.062in Johnson 142-0701-801 |
| I-, I+, Q+, Q-, J5, J14, J15 |     7 | PC mini-red Keystone 5000                                    |
| L2                           |     1 | 39nH ±5% inductor (0603) Murata LQW18AN39NJ00                |

## Component List (continued)

| DESIGNATION                                |   QTY | DESCRIPTION                                                                            |
|--------------------------------------------|-------|----------------------------------------------------------------------------------------|
| R1                                         |     1 | 510 Ω ±5% resistor (0603)                                                              |
| R2, R6, R7, R12, R24                       |     5 | 1k Ω ±5% resistors (0603)                                                              |
| R3, R10, R11, R18, R27, R29, R30, R41, R42 |     9 | 100 Ω ±5% resistors (0603)                                                             |
| R4, R5, R8, R9, R17, R28, R46, R47         |     8 | 2.7k Ω ±5% resistors (0603)                                                            |
| R13                                        |     1 | 39k Ω ±5% resistor (0603)                                                              |
| R14, R43                                   |     2 | 5.1k Ω ±5% resistors (0603)                                                            |
| R15, R16, R19, R20, R25, R31               |     0 | Open                                                                                   |
| R21                                        |     1 | 10k Ω ±5% resistor (0603)                                                              |
| R22, R23                                   |     2 | 49.9 Ω ±1% resistors (0603)                                                            |
| R25                                        |     1 | 0 Ω resistor (0603)                                                                    |
| R26                                        |     1 | 0 Ω resistor (0603)                                                                    |
| U1                                         |     1 | MAX2165ETI+ Maxim Integrated Products                                                  |
| U2, U4                                     |     2 | Single-supply op amps with rail-to- rail outputs MAX4453ESA+ Maxim Integrated Products |
| U3                                         |     1 | Hex buffer/driver Texas Instruments SN74LV07ADB                                        |
| U5                                         |     0 | Do not install                                                                         |
| Y2                                         |     1 | 20MHz crystal Citizen America HCM49- 20.000MABJ-UT                                     |
| -                                          |     1 | MAX2165EVKIT+ PCB                                                                      |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE                |
|-----------------------|--------------|--------------|------------------------|
| AVX Corp.             | 843-448-9411 | 843-448-7139 | www.avxcorp.com        |
| Citizen America       | 310-781-1460 | 310-781-9172 | www.citizencrystal.com |
| Murata Mfg. Co., Ltd. | 770-436-1300 | 770-436-3030 | www.murata.com         |
| Texas Instruments     | 800-336-5236 | -            | www.ti.com             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. Do not turn on the DC power or RF signal generators until all connections are completed .

- 1) Verify jumper shunt JP13 is installed across the top two posts so when the board is oriented, the Maxim logo is upright. This pulls the ADDR pin to ground.
- 2) Set the DC power supply to +2.85V. Connect the power supply to the VCC (J14) (through an ammeter if desired), VCC2 (J5), and GND (J15) terminals on the EV kit. If available, set the current limit to 125mA. The VCC terminal powers the MAX2165 while the VCC2 terminal, connected by JP7 to VCC, powers the serial interface and I/Q buffer circuitry.
- 3) Set both outputs of the dual-output DC power supply  to  +2.3V.  Connect one output to the BB\_AGC jumper (JP6) and the other output to the RF\_AGC jumper (JP10). Use the pin closest to the IC on both jumpers.
- 4) Set the RF signal generator to a 471MHz frequency and a -85dBm power level, connected to the SMA connector labeled RFIN on the evaluation board.
- 5) Connect a 25-pin parallel cable between the PC's parallel port and the MAX2165 evaluation board.
- 6) Install  and run the MAX2165 control software. Software is available for download on the Maxim website at www.maxim-ic.com.
- 7) Load the default register settings from the control software by clicking the Default button at the top of the screen.
- 8) The supply current from the +2.85V supply to the VCC terminal should read approximately 110mA. Be sure to adjust the power supply to account for any voltage drop across the ammeter.
- 9) Connect either the I or Q output to a spectrum analyzer or to an oscilloscope. Note the 1.5VDC bias at the output connectors.

<!-- image -->

## MAX2165 Evaluation Kit

- 10) If using a spectrum analyzer, set it to display frequencies from DC to 5MHz. Set the reference level to 0dBm. Adjust the input power of the signal generator until the output level of the EV kit reaches -8dBm.
- 11) If using an oscilloscope, set the input impedance of the oscilloscope to high impedance and observe the approximately 1MHz sine wave. Adjust the input power of the signal generator until the IF output reaches 500mVP-P. Note that this is twice the voltage than if the EV kit drives a 50 Ω load.

## Board Loss Correction

The MAX2165EVKIT also has a buffer at the I and Q output to allow interfacing with 50 Ω test  equipment. These buffers have 50 Ω resistors (R23 and R22) in series with their outputs for back-termination. When the I  and Q outputs from the EV kit are loaded with a 50 Ω test instrument, a voltage divider is formed by the 50 Ω back-termination resistor and the 50 Ω test  instrument input impedance, dividing the I/Q output signal by 2. This loss must be accounted for when measuring gain. The nominal output level at the IC's I/Q outputs is 500mVP-P (-2dBm) that equates to -8dBm at the I/Q BNC connectors on the kit when loaded with a 50 Ω test instrument.

## Layout Considerations

The MAX2165 EV kit should serve as a close guide for PCB layout. Keep RF signal lines as short as possible to minimize losses and radiation. Use controlled impedance on all high-frequency traces. The exposed paddle must be soldered evenly to the board's ground plane for  proper  operation.  Use abundant vias beneath the exposed paddle and between RF traces to minimize undesired RF coupling.

To minimize coupling between different sections of the IC, each VCC pin must have a bypass capacitor with a low impedance to ground at the frequency of interest. Do not share ground vias among multiple connections to the PCB ground plane.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2165 Evaluation Kit

Figure 1. EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2165 Evaluation Kit

Figure 2. MAX2165 EV Kit PCB Layout Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2165 Evaluation Kit

Figure 3. MAX2165 EV Kit PCB Layout Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2165 Evaluation Kit

Figure 4. MAX2165 EV Kit PCB Layout Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7

Janet Freed