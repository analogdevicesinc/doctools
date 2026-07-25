<!-- lastmod 2022-08-02 -->
## General Description

The MAX2370 evaluation kit (EV kit) simplifies the testing and evaluation of the MAX2370 quadrature transmitter. The EV kit provides 50 Ω SMA connectors for all RF inputs and outputs. A varactor-based tank circuit is provided for the on-chip IF voltage-controlled oscillator (VCO) and phase locked with an on-chip PLL. I/Q baseband inputs come with standard BNC connectors.

The EV kit allows evaluation of the MAX2370 I/Q modulator, IF VGA, RF upconverter, IF VCO, dual synthesizer,  3-wire  programming interface, and power-management features.

SPI/QSPI are trademarks of Motorola, Inc.

MICROWIRE is a trademark of National Semiconductor Corp.

## Component List

| DESIGNATION                                                                                                |   QTY | DESCRIPTION                                                 |
|------------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------|
| C1, C2, C16, C20, C39, C65, C66, C80                                                                       |     8 | 100pF ±5% ceramic capacitors (0402) Murata GRM1555C1H101J   |
| C3, C11, C13, C14, C26, C27, C33, C38, C40, C41, C43, C48, C52, C56, C58, C59, C60, C64, C67, C68, C82-C85 |     0 | Open                                                        |
| C4, C5, C42, C75, C79, C88, C91, C93, C95, C96, C97                                                        |    11 | 0.1µF ±10% ceramic capacitors (0402) Murata GRM155R61C104K  |
| C6                                                                                                         |     1 | 4.7pF ±0.1pF ceramic capacitor (0402) Murata GRM1555C1H4R7B |
| C7, C10, C18, C19, C21, C30, C31, C35, C63, C76, C78, C81                                                  |    12 | 1000pF ±10% ceramic capacitors (0402) Murata GRM155R71H102K |
| C8, C9, C15, C17, C34, C55, C57                                                                            |     7 | 0.01µF ±10% ceramic capacitors (0402) Murata GRM155R71C103K |
| C12                                                                                                        |     1 | 1.2pF ±0.1pF ceramic capacitor (0402) Murata GRM1555C1H1R2B |
| C22, C23                                                                                                   |     2 | 33pF ±5% ceramic capacitors (0402) Murata GRM1555C1H330J    |

## Quick Start

The MAX2370 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX2370. It is intended as a guide only, and substitutions may be possible.

- One low-noise signal generator capable of generating a 19.2MHz signal at 600mVP-P for the PLL reference frequency
- One RF signal generator capable of generating signals in the 530MHz to 695MHz frequency range with a minimum output power of -15dBm for the RF local oscillator
- An RF spectrum analyzer with optional digital modulation personality (Rohde and Schwarz FSEA30 or equivalent)
- A power supply that can provide 250mA at +3.0V
- A power supply that can provide 50mA at +5V
- An additional voltage source adjustable from 0 to 2.5V for control of the VGA functions

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

- ♦ 50 Ω SMA Connectors on All RF Ports
- ♦ BNC Connectors for Baseband Inputs
- ♦ Fully Assembled and Tested
- ♦ Low-Power Shutdown Mode
- ♦ SPI TM /QSPI TM /MICROWIRE TM Compatible
- ♦ PC Control Software (Available at www.maxim-ic.com)

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE      |
|--------------|----------------|-----------------|
| MAX2370EVKIT | -40°C to +85°C | 48 Thin QFN-EP* |

## MAX2370 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| C24, C25      |     2 | 9pF ±0.1pF ceramic capacitors (0402) Murata GRM1555C1H9R0B   |
| C28           |     1 | 0.033µF ±10% ceramic capacitor (0402) Murata GRM155R71A333K  |
| C29           |     1 | 0.022µF ±10% ceramic capacitor (0402) Murata GRM155R71C223K  |
| C32           |     1 | 1.0µF ±10% ceramic capacitor (0805) Murata GRM21BR71C105K    |
| C36           |     1 | 3300pF ±10% ceramic capacitor (0402) Murata GRM155R71H332K   |
| C37           |     1 | 0.047µF ±10% ceramic capacitor (0402) Murata GRM155R71A473K  |
| C44, C45, C46 |     3 | 15pF ±5% ceramic capacitors (0402) Murata GRM1555C1H150J     |
| C47, C50      |     2 | 9.1pF ±0.1pF ceramic capacitors (0402) Murata GRM1555C1H9R1B |
| C49           |     1 | 2.7pF ±0.1pF ceramic capacitor (0402) Murata GRM1555C1H2R7B  |
| C51           |     1 | 1.5pF ±0.1pF ceramic capacitor (0402) Murata GRM1555C1H1R5B  |
| C53, C54      |     2 | 10pF ±5% ceramic capacitors (0402) Murata GRM1555C1H100J     |

- I/Q arbitrary waveform generator or CDMA generator (Agilent E4433B or equivalent)
- PC (486DX33 or better) with Windows ®  95/98/2000/ NT 4.0 or later operating system and an available parallel port
- INTF2300 interface board and cable (supplied with EV kit)

## Connections and Setup

This section provides step-by-step instructions for getting  the  EV  kit  up  and  running  for  evaluation  of  the MAX2370 in 455MHz CDMA mode.

- 1) Verify shunts JU1 and JU6-JU10 are in place.

Windows is a registered trademark of Microsoft Corp.

## Component List (continued)

| DESIGNATION                      |   QTY | DESCRIPTION                                                |
|----------------------------------|-------|------------------------------------------------------------|
| C70, C71                         |     2 | 22µF ±10% tantalum capacitors (B-case) AVX TAJB226K010     |
| C72, C73, C94                    |     3 | 1.0µF ±10% ceramic capacitors (0603) Murata GRM188R61A105K |
| C74, C77, C86                    |     3 | 10µF ±20% tantalum capacitors (B-case) AVX TAJB106K010     |
| D1, D2, D4, D5                   |     4 | Varactor diodes Alpha Industries SMV1763-079               |
| D3                               |     1 | LED                                                        |
| FL1                              |     0 | Open                                                       |
| FL2                              |     0 | Open                                                       |
| J1, J16, J20, J21, J24, J25, J27 |     7 | SMA connectors-edge mount Johnson 142-0701-801             |
| J2, J6, J22                      |     0 | Open                                                       |
| J3, J7                           |     2 | BNC connectors A/D Electronics 580-002-00                  |
| JP1                              |     1 | 2 x 10 header Sullins PTC36DAAN                            |
| JU1-JU4, JU6, JU7-JU10           |     9 | 1 x 2 headers Sullins PTC36SAAN                            |
| JU1, JU6-JU10                    |     6 | Shunts Sullins STC02SYAN                                   |
| JU11-JU16, LOCK TESTPOINT, RBIAS |     8 | Test points Keystone 5000                                  |

- 2) Connect the INTF2300 interface cable from the INTF2300 interface board to the MAX2370 EV kit. Pin 1 of the interface cable corresponds to the red wire. Pin 1 of the connectors are designated in the silkscreen on the MAX2370 and INTF2300 boards.
- 3) Connect a +3V power supply to the headers labeled VBAT and VREG. The INTF2300 board derives its power from the MAX2370 EV kit.
- 4) Connect  a  +5V  power  supply  to  the  header labeled +5V.
- 5) With its output disabled, connect the low-noise signal  generator to the REF port. Set its frequency to 19.2MHz and its amplitude to -10dBm.
- 6) With its output disabled, connect the RF signal generator to the LOL port. Set its frequency to 575MHz and its amplitude to -10dBm.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

| DESIGNATION                                                                                     |   QTY | DESCRIPTION                                    |
|-------------------------------------------------------------------------------------------------|-------|------------------------------------------------|
| L1                                                                                              |     1 | 47nH ±5% inductor (0603)                       |
| L2, L3                                                                                          |     2 | 100nH ±5% inductors (0603)                     |
| L4, L6, L7, L11, L16                                                                            |     0 | Open                                           |
| L5, L19                                                                                         |     2 | 220nH ±5% inductors (0603)                     |
| L9                                                                                              |     1 | 56nH ±5% inductor (0603)                       |
| L10                                                                                             |     1 | 11nH ±5% inductor (0603)                       |
| Q1, Q2                                                                                          |     2 | npn transistors Central Semiconductor CMPT8099 |
| R1, R2, R7, R19, R24, R47, R52                                                                  |     7 | 47k Ω ±5% resistors (0402)                     |
| R3                                                                                              |     1 | 51k Ω ±5% resistor (0402)                      |
| R4, R5, R29, R30                                                                                |     4 | 1k Ω ±5% resistors (0402)                      |
| R6, R10, R11, R12, R15, R17, R20, R26, R37, R44, R46, R49, R53, R55, R58-R61, R70, R73, R76-R84 |     0 | Open                                           |
| R8, R16, R28, R48, R50, R51                                                                     |     6 | 511 Ω ±1% resistors (0805)                     |
| R9, R18                                                                                         |     2 | 39.2 Ω ±1% resistors (0805)                    |
| R13, R22                                                                                        |     2 | 680 Ω ±5% resistors (0805)                     |
| R14, R21, R41, R42                                                                              |     4 | 100 Ω ±1% resistors (0402)                     |

- 7) Enable the low-noise signal generator's output; then enable the RF signal generator's output.
- 8) Install  and  run  Maxim's CDMA control software for the  MAX2370 evaluation kit. This software is available on the web at www.maxim-ic.com/tools/evkit. On the IC selection form, select 2363-P3. Click on the Register View button ( Note: The MAX2363 Register View screen is also used to program the MAX2370.)
- 9) With the MAX2363-P3 control screen active, set the registers according to Table 1. Set the reference frequency in the control screen to 19.2MHz.
- 10) Click on the Send Data button for each of the control registers located at the right of the screen. There are eight registers that need to be downloaded to the IC. The Lock indicator on the screen should be red, indicating that the IF PLL is locked.
- 11) Apply 2.5V to the VGC header (JU4).

<!-- image -->

## MAX2370 Evaluation Kit

## Component List (continued)

| DESIGNATION                       |   QTY | DESCRIPTION                              |
|-----------------------------------|-------|------------------------------------------|
| R23, R45                          |     2 | 1k Ω ±1% resistors (0805)                |
| R25, R33, R34, R38, R39, R57, R62 |     7 | 0 Ω ±5% resistors (0402)                 |
| R27, R74                          |     2 | 10k Ω ±5% resistors (0402)               |
| R31, R32, R35, R36                |     4 | 5.1k Ω ±5% resistors (0402)              |
| R40                               |     1 | 12k Ω ±5% resistor (0402)                |
| R43, R54, R56                     |     3 | 470 Ω ±5% resistors (0402)               |
| R63                               |     1 | 560 Ω ±5% resistor (0402)                |
| R64                               |     1 | 20k Ω ±5% resistor (0402)                |
| R71                               |     1 | 130k Ω ±5% resistor (0402)               |
| R72                               |     1 | 2.4k Ω ±5% resistor (0402)               |
| T2, T3                            |     2 | Baluns Toko 458DB-1616                   |
| U1                                |     1 | 450MHz quadrature transmitter MAX2370EGM |
| U2                                |     1 | +2.8V LDO MAX8867EUK28                   |
| U3, U4                            |     2 | Dual op amps MAX412ESA                   |
| U5, U8                            |     2 | +3.0V LDOs MAX8867EUK30                  |
| V1                                |     0 | Open                                     |
| V2                                |     0 | Open                                     |
| V3                                |     0 | Open                                     |

## IF Modulator Evaluation

- 1) Connect the CDMA baseband signal generator to the I  and  Q  ports  using  BNC connectors. Set the modulation to reverse-channel CDMA at an output level of 780mVP-P. The nominal input level at the I/Q input pins is 130mVRMS. Measure the differential voltage at the chip's I/Q inputs and adjust the signal generator's  output  if  necessary  to  achieve 130mVRMS.
- 2) Connect IFOUT to the spectrum analyzer. Configure the spectrum analyzer to measure ACPR for reverse-channel CDMA. Set the center frequency to 120MHz with a -10dBm reference level and 30kHz resolution bandwidth.
- 3) Adjust the VGC voltage until the output power is -12dBm. The ACPR at ±885kHz offset will be approximately -66dBc, and the ACPR at ±1.98MHz will be approximately -84dBc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2370 Evaluation Kit

## RF Upconverter Evaluation

- 1) Connect a CDMA RF signal generator to the IFIN port  using  the  SMA connector. Set the carrier frequency to 120MHz, set the output power to -16.5dBm, and set the modulation to reverse-channel CDMA.
- 2) Connect RFL to the spectrum analyzer. Configure the spectrum analyzer to measure ACPR for reverse-channel CDMA. Set the center frequency to 455MHz with a +10dBm reference level and 30kHz resolution bandwidth.
- 3) Set the VGC voltage to 2.5V and adjust the IF input power until the RF output power is +8dBm. The ACPR at ±885kHz offset will be approximately -67dBc, and the ACPR at ±1.98MHz will be approximately -86dBc.

## Cascaded Evaluation

- 1) Connect the CDMA baseband signal generator to the I and Q ports using BNC connectors. Set the modulation to reverse-channel CDMA at a 780mVP-P output level. The nominal input level at the IC's I/Q input pins is 130mVRMS. Measure the differential voltage at the chip's I/Q inputs and adjust the signal generator's  output  if  necessary  to  achieve 130mVRMS.
- 2) Connect an external 120MHz bandpass filter between the IFOUT and IFIN ports of the MAX2370 evaluation kit. A 50 Ω filter with approximately 4dB of insertion loss is recommended, or an attenuator with a loss of 4dB can be used if a 120MHz filter is not available. The on-board baluns and matching networks at the IFOUT and IFIN ports each add approximately 0.5dB of loss, for a total IF loss of 5dB.
- 3) Connect RFL to the spectrum analyzer. Configure the spectrum analyzer to measure ACPR for reverse-channel CDMA. Set the center frequency to 455MHz with a +10dBm reference level and 30kHz resolution bandwidth.
- 4) Adjust the VGC voltage until the RF output power is +8dBm. The ACPR at ±885kHz offset will be approximately -64dBc, and the ACPR at ±1.98MHz will be approximately -82dBc.

## Adjustments and Control

## VGA Adjust

Apply a voltage from 0.5V to 2.5V to header VGC to adjust the IF and RF VGA of the MAX2370. The VGC voltage is filtered  on  the  EV  kit  to  minimize  undesired amplitude modulation.

## Table 1. Register Settings

| REGISTER NAME   | TYPICAL REGISTER SETTINGS   | REGISTER ADDRESS   |
|-----------------|-----------------------------|--------------------|
| RFM[17:0]       | 23000 DEC                   | 0000 b             |
| RFR[12:0]       | 384 DEC                     | 0001 b             |
| IFM[13:0]       | 4800 DEC                    | 0010 b             |
| IFR[10:0]       | 384 DEC                     | 0011 b             |
| OPCTRL[15:0]    | 090F HEX                    | 0100 b             |
| CONFIG[15:0]    | D03F HEX                    | 0101 b             |
| I CC CTRL[15:0] | 0C38 HEX                    | 0110 b             |
| TEST[8:0]       | 100 HEX                     | 0111 b             |

## Interface Control

The interface port is designed to use a 20-pin ribbon cable (Figure 1); 10 pins are signal lines, and the other 10 pins are digital grounds. Pin 1 of the interface cable is  red.  Pin  1  is  also  designated  in  the  silk  screen  on each of the PC boards.

## Detailed Description

The following section covers the EV kit's circuit blocks in detail (refer to the MAX2370 data sheet for additional information).

## I/Q Inputs

The single-ended I/Q signals are converted to differential by operational amplifiers on the EV kit. The op amps also provide DC bias to the I/Q input pins of the MAX2370. The EV kits are set up to provide 130mVRMS differential to the IC when driven with an IS-95 forwardmodulated source set to deliver 0.9VP-P into a matched 50 Ω load.

## Programming Interface

The programming interface is provided by the INTF2300 interface board. The interface board buffers and level shifts  logic  levels  from  the  PC  to  the  MAX2370  EV  kit (refer to the INTF2300 documentation). These logic signals control the logic pins as well as the serial interface.

## IFLO

The IFLO output port provides an output signal at the IF VCO frequency with a typical -12dBm output power. Enable the IFLO port by setting the BUF\_EN bit in the OPCTRL register.

## REF

REF is the reference frequency input to the RF and IF PLL. The REF port is AC-coupled. Make sure the reference signal has low phase noise, similar to that of a TCXO.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## LOL

The MAX2370 EV kit requires an external RF local oscillator  for  evaluation.  A  low-noise  RF  signal  generator can be connected to the EV kit's LOL port to act as the local oscillator. The minimum input level at the LOL port is -15dBm.

## RFL

The MAX2370 evaluation kit is shipped with a matching network optimized for 400MHz to 500MHz. This matching network can be retuned to be optimized for evaluation at other RF frequencies.

## IFIN± and IFOUT±

The MAX2370 evaluation kit is shipped configured for individual IF modulator and RF upconverter evaluation. IFIN± and IFOUT± are matched to 50 Ω at 120MHz and on-board baluns at each port convert from differential to single-ended signals.

For cascaded evaluation, a 120MHz bandpass filter must be connected between the board's IFIN and IFOUT SMA connectors. A 50 Ω filter with a typical 4dB insertion loss is recommended to achieve the cascaded specifications quoted in the MAX2370 data sheet.

## VBAT/VREG

VBAT is the supply voltage to the PA driver circuitry. VREG is the supply voltage to all MAX2370's circuits other than the PA driver. The VREG header must be connected to VBAT or connected to a separate 3V supply for proper operation.

Jumpers are provided to enable current measurement to each functional block of the IC (Table 2).

## RBIAS

Resistor R74 (nominally 10k Ω ) connects from RBIAS to ground and sets the bias current for the upconverters and PA driver stages. Output linearity or efficiency may be improved by adjusting the PA driver current through the I-MULT bits in the ICC control register.

## MAX2370 Evaluation Kit

## Table 2. Jumpers

| JUMPER NUMBER   | ASSOCIATED FUNCTIONAL BLOCK   |
|-----------------|-------------------------------|
| JU1             | V CC for VCCDRIVER            |
| JU2             | Not used                      |
| JU3             | Not used                      |
| JU4             | VGC jumper                    |
| JU6             | V CC for PA predrivers        |
| JU7             | V CC for RF mixer             |
| JU8             | V CC for IF modulator         |
| JU9             | V CC for digital interface    |
| JU10            | V CC for RF charge pump       |

## Layout Considerations

The MAX2370 EV kit can serve as a guide for your board layout. Keep PC board trace lengths as short as possible to minimize parasitics. Place decoupling capacitors as close to the IC as possible with a direct connection to the PC board's ground plane. Do not share decoupling capacitor ground vias with other ground connections.

## PC Board Construction

The MAX2370 EV kit PC board uses a 14-mil-wide trace for 50 Ω transmission line. The PC board has an 8-millayer profile on FR4 with a dielectric constant of 4.5.

## INTF2300 SPI Interface Board

The INTF2300 interface board is used to interface 3-wire SPI protocol from a PC's parallel port to the EV kit.  This board will level translate 5V logic from the PC to VCC of the EV kit (this will typically be 3V logic). The INTF2300 also provides buffering and EMI filtering. Its absolute maximum supply voltage is 4.6V, limited by the breakdown of the buffer IC. The recommended operating supply voltage range is +2.7V to +3.6V.

## Component Suppliers

| SUPPLIER         | PHONE        | WEBSITE                   |
|------------------|--------------|---------------------------|
| Alpha Industries | 617-935-5150 | www.alphaindustries.com   |
| AVX              | 803-946-0690 | www.avxcorp.com           |
| Coilcraft        | 847-639-6400 | www.coilcraft.com         |
| Johnson          | 507-833-8822 | www.johnsoncomponents.com |
| Murata           | 770-436-1300 | www.murata.com            |
| Toko             | 708-297-0070 | www.tokoam.com            |

Note: Indicate that you are using the MAX2370 when contacting these suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2370 Evaluation Kit

Figure 1. INTF2300 with MAX2370 EV Kit Providing Filtered Supply

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2370 Evaluation Kit

<!-- image -->

Figure 2. MAX2370 EV Kit Schematic (Sheet 1 of 2). Note: This schematic only represents components that are placed.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2370 Evaluation Kit

Figure 2. MAX2370 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2370 Evaluation Kit

<!-- image -->

Figure 3. MAX2370 EV Kit Component Placement Guide-Component Side (Top View)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2370 Evaluation Kit

Figure 4. MAX2370 EV Kit Component Placement Guide-Solder Side (Bottom View)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 5. MAX2370 EV Kit PC Board Layout-Component Side (Top View)

<!-- image -->

Figure 7. MAX2370 EV Kit PC Board Layout-Inner Layer 3 (Top View)

<!-- image -->

## MAX2370 Evaluation Kit

Figure 6. MAX2370 EV Kit PC Board Layout-Inner Layer 2 (Ground Plane, Top View)

<!-- image -->

Figure 8. MAX2370 EV Kit PC Board Layout-Solder Side (Bottom View)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.