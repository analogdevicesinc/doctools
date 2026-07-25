<!-- lastmod 2022-08-02 -->
## General Description

The MAX2160 evaluation kit (EV kit) simplifies the testing and evaluation of the MAX2160 single-segment ISDB-T tuner. The evaluation kit is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit  schematic,  a  bill  of  materials  (BOM)  for  the  kit, and artwork for each layer of the PC board.

| DESIGNATION                                    |   QTY | DESCRIPTION                                                   |
|------------------------------------------------|-------|---------------------------------------------------------------|
| C1, C14, C15, C20-C24, C34, C35, C36, C38, C39 |    13 | 0.01µF ± 10% ceramic capacitors (0402) Murata GRM155R71E103K  |
| C2                                             |     1 | 27pF ± 5% ceramic capacitor (0402) Murata GRM1555C1H270J      |
| C3, C4, C5, C7-C10, C12, C16, C17, C19         |    11 | 100pF ± 5% ceramic capacitors (0402) Murata GRM1555C1H101J    |
| C6, C18                                        |     2 | 1000pF ceramic capacitors (0402) Murata GRM155R71H102K        |
| C11                                            |     1 | 0 Ω resistor (0402)                                           |
| C13                                            |     0 | Not installed                                                 |
| C25, C26                                       |     2 | 1µF ± 10% ceramic capacitors (0402) Murata GRM155R60J105K     |
| C27                                            |     1 | 0.1µF ± 10% ceramic capacitor (0402) Murata GRM155R71C104K    |
| C28                                            |     1 | 0.047µF ceramic capacitor (0402) Murata GRM155R71A473K        |
| C29                                            |     1 | 470pF ± 5% ceramic capacitor (0402) Murata GRM1555C1H471J     |
| C30                                            |     1 | 220pF ± 5% ceramic capacitor (0402) Murata GRM1555C1H221J     |
| C31, C32, C33                                  |     3 | 10µF ± 10% tantalum capacitors (C case) AVX TAJC106K016       |
| C37                                            |     1 | 470nF ± 10% ceramic capacitor (0402) Murata GRM155R60J474K    |
| J1, J2, J3, J5, J8, J9                         |     6 | Edge-mount SMA connectors-round contacts Johnson 142-0701-801 |

## Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                                                             |
|-------------------------------------------------|-------|-------------------------------------------------------------------------|
| J4                                              |     1 | DB25 connector-right-angle male AMP 747238-4                            |
| J6                                              |     0 | 2-pin in-line header-0.100in centers Sullins PTC36SAAN                  |
| J7                                              |     1 | 2-pin in-line header-0.100in centers Sullins PTC36SAAN                  |
| J7, J27                                         |     2 | Shorting jumpers Sullins STC02SYAN                                      |
| J10                                             |     0 | Scope probe Tektronix 131-4244-00 (not installed)                       |
| J11, J12                                        |     2 | PC-mount SMA connectors Johnson 142-0701-201                            |
| J13-J17, TP1-TP4                                |     9 | Mini red test points Keystone 5000                                      |
| J18-J26                                         |     0 | 2-pin in-line headers-0.100in centers Sullins PTC36SAAN (not installed) |
| J27                                             |     1 | 3-pin in-line header-0.100in centers Sullins PTC36SAAN                  |
| L1                                              |     0 | 10nH ± 5% inductor (0402) Murata LQG15HN10NJ00 (not installed)          |
| R1, R2, R4, R6, R7, R8, R18, R27, R28, R31, R33 |    11 | 0 Ω resistors (0402)                                                    |
| R3, R5, R19                                     |     0 | Not installed                                                           |
| R9-R13, R32                                     |     6 | 4.7k Ω ± 5% resistors (0402)                                            |
| R16, R17                                        |     2 | 20k Ω ± 5% resistors (0402)                                             |
| R20                                             |     1 | 1.2k Ω ± 5% resistor (0402)                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ Easy Evaluation of the MAX2160
- ♦ 50 Ω SMA Connectors
- ♦ All Critical Peripheral Components Included
- ♦ Fully Assembled and Tested
- ♦ PC Control Software (Available at www.maximic.com)

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE      |
|--------------|----------------|-----------------|
| MAX2160EVKIT | -40°C to +85°C | 40 Thin QFN-EP* |

## MAX2160 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| R21, R22      |     2 | 5.6k Ω ± 5% resistors (0402)                                                         |
| R23, R24, R26 |     3 | 10k Ω ± 5% resistors (0402)                                                          |
| R29, R30      |     2 | 49.9 Ω ± 1% resistors (0402)                                                         |
| U1            |     1 | ISDB-T receiver MAX2160 40-pin TQFN Maxim MAX2160ETL                                 |
| U2            |     1 | Hex buffer/driver 14-pin SO Texas Instruments SN74LV07ADR                            |
| U3            |     1 | High-speed, single-supply, rail-to-rail buffer MAX4217 8-pin µMAX  Maxim MAX4217EUA |
| Y1            |     1 | 16MHz surface-mount crystal Kyocera Kineski Corporation CX3225SB16000D0FLJ08         |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| AVX        | 803-946-0690 | www.avxcorp.com           |
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |

Note: Indicate that you are using the MAX2160 when contacting these suppliers.

## Quick Start

The MAX2160 EV kit is fully assembled and factory tested.  Follow  the  instructions  in  the Connections and Setup section for proper device evaluation.

## Test Equipment Required

- One power supply capable of supplying at least 500mA, +2.85V
- One dual-output power supply capable of supplying at least 500mA at +3V and -3V
- One RF signal generator capable of delivering at least 0dBm of output power at frequencies up to 1GHz
- One RF spectrum analyzer capable of covering the operating frequency range of the device
- A PC (486DX33 or better) with Windows® 95/98, 2000, NT 4.0 or later operating system, 64MB of memory, and an available parallel port
- A 25-pin parallel cable
- (Optional) One multichannel digital oscilloscope
- (Optional) A network analyzer to measure return loss
- (Optional) An ammeter to measure supply current Windows is a registered trademark of Microsoft Corp.

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. Do not turn on DC power or RF signal generators until all connections are completed:

- 1) Verify that all the desired jumpers are in place (see Table 1).
- 2) With its output disabled, set the DC power supply to  +2.85V. Connect the power supply to the VCC (through an ammeter if desired) and GND terminals on the EV kit. If available, set the current limit to 75mA.
- 3) With its output disabled, set the dual-output DC power-supply voltages to +3V and -3V. Connect the +3V, -3V, and GND terminals of the power supply  to  jumpers  J15,  J17,  and  J16,  respectively.  If available, set the current limits to 50mA.
- 4) With its output disabled, set the RF signal generator  to  a  767.143MHz frequency and a -60dBm power level. Connect the output of the RF signal generator to J5 on the evaluation board.
- 5) Connect a 25-pin parallel cable between the PC's parallel port and the MAX2160 evaluation board.
- 6) Turn on the ±3V power supply, followed by the +2.85V power supply. The supply current from the +2.85V supply should read approximately 44mA. Be sure to adjust the power supply to account for any voltage drop across the ammeter.
- 7) Adjust potentiometers R16 and R17 until the voltages at GC1 and GC2 are approximately 1.5V.
- 8) Install  and run the MAX2160 control software. Software is available for download on the Maxim website at www.maxim-ic.com.
- 9) Load the default register settings from the control software by clicking the Defaults tab at the top of the screen.
- 10) Connect either the I or Q output to the spectrum analyzer, or connect both I and Q outputs to the oscilloscope.
- 11) Enable the RF signal generator's output.
- 12) If  using  a  spectrum analyzer, set the center frequency of the analyzer to 571kHz and a span of 100kHz. Set the reference level to 0dBm. Increase the input power of the signal generator until the output level reaches -2dBm. This is the nominal output level  for  the  I  and  Q  channels.  The  gain  of  the receiver can be calculated by taking the difference in dB between the input and output power.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

If  using  an  oscilloscope,  observe  the  571kHz  sine wave. Increase the input power of the signal generator until the I and Q outputs reach 0.5VP-P. This is the nominal output level for the I and Q channels. The I and Q waveforms will be out-of-phase by approximately 90°.

Voltage gain can be calculated by:

Gain = 20 x LOG(VOUT\_P-P / (2 x sqrt(2) x VIN\_RMS) ) where VIN\_RMS = √ ( 50 x 10 [ (Pin (dBm) - 30) / 10] )

## RF Gain-Control Range (GC1)

To measure the gain-control range in the RF stage, follow the steps below:

- 1) Adjust R17 so VGC2 = 1.5V.
- 2) Adjust R16 so VGC1 = 0.3V.
- 3) Adjust the RF input power to achieve -2dBm at the I/Q outputs. Record this as the reference output level.
- 4) Adjust R16 until VGC1 = 2.7V, and record the change in the I/Q output levels in dB relative to -2dBm. This change in output power is the gaincontrol range of the RF stage.
- 5) The RF gain-control range will be at least 38dB.

## Baseband Gain-Control Range (GC2)

To measure the gain-control range in the baseband stage, follow the steps below:

- 1) Adjust R16 so VGC1 = 1.5V.
- 2) Adjust R17 so VGC2 = 0.3V.
- 3) Adjust the RF input power to achieve -2dBm at the I/Q outputs. Record this as the reference output level.
- 4) Adjust R17 until VGC2 = 2.7V, and record the change in the I/Q output levels in dB relative to -2dBm. This change in output power is the gain-control range of the baseband stage.
- 5) The baseband gain-control range will be at least 57dB.

## Layout Considerations

The MAX2160 evaluation board can serve as a reference board layout. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss. Place supply-decoupling capacitors as close to the device as possible. Solder the package's exposed paddle evenly to the board ground plane for a low-inductance ground connection and for improved thermal dissipation.

<!-- image -->

## MAX2160 Evaluation Kit

In  addition,  the  ground  returns  for  the  VCO,  VTUNE, and charge pump require special layout consideration. The VCOBYP capacitor (C37) and the VCCVCO bypass capacitor (C19) ground returns must be routed back to the GNDVCO pin and then connected to the overall ground plane at that point (GNDVCO). All loop filter component grounds (C27-C30) and the VCCCP bypass capacitor (C17) ground must all be routed together back to the GNDCP pin. GNDTUNE must also be routed back to the GNDCP pin along with all other grounds from the PLL loop filter. The GNDCP pin must then be connected to the overall ground plane. See Figures 2-6 for recommended board layout.

## Table 1. MAX2160 EV Kit Jumper Settings

| JUMPER   | FUNCTION                         | JUMPER POSITION                                                                                                                                                                                   |
|----------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J6       | Sets control of the ENTCXO pin   | OPEN: ENTCXO pin is controlled by the PC software. SHORT: ENTCXO pin is pulled low (remove R31 in this mode).                                                                                     |
| J7       | Sets control of the GC2 pin      | OPEN: GC2 is controlled with an external voltage source applied to TP4 (remove R18 in this mode). SHORT: GC2 is controlled by the voltage set by potentiometer R17.                               |
| J18-J26  | Set control of VCC1 through VCC9 | OPEN: VCC1 through VCC9 can be individually applied. SHORT: VCC1 through VCC9 are connected to the board's main supply voltage, VCC. (Note: These jumpers are hardwired as a short on the board.) |
| J27      | Sets control of the GC1 pin      | 1-2: GC1 is controlled by the voltage set by potentiometer R16. 2-3: GC1 is controlled by the RF power-detector output (power detector must be enabled).                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2160 Evaluation Kit

Figure 1. MAX2160 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2160 Evaluation Kit

<!-- image -->

Figure 2. MAX2160 EV Kit PC Board Layout-Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2160 Evaluation Kit

Figure 3. MAX2160 EV Kit PC Board Layout-Primary Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2160 Evaluation Kit

<!-- image -->

Figure 4. MAX2160 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2160 Evaluation Kit

Figure 5. MAX2160 EV Kit PC Board Layout-Inner Layer 3

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2160 Evaluation Kit

Figure 6. MAX2160 EV Kit PC Board Layout-Secondary Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9