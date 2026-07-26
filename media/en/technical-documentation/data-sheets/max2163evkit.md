<!-- lastmod 2022-08-02 -->
## General Description

The MAX2163 evaluation kit (EV kit) simplifies the testing and evaluation of the MAX2163 one-segment ISDBT tuner. The EV kit is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included on the  EV  kit  for  the  input  and  output  to  allow  quick  and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit  schematic,  a  bill  of  materials  (BOM)  for  the  kit, and artwork for each layer of the PCB.

| DESIGNATION                                        |   QTY | DESCRIPTION                                                 |
|----------------------------------------------------|-------|-------------------------------------------------------------|
| C1, C18, C26, C41-C44, C67, C68                    |     0 | Not installed, capacitors                                   |
| C2, C4                                             |     2 | 1000pF ±10% ceramic capacitors (0402) Murata GRM1555C1H102J |
| C3, C6, C8, C23, C24, C34, C35, C36, C46           |     9 | 10nF ±10% ceramic capacitors (0402) Murata GRM155R71C103K   |
| C5, C10, C16, C17, C19, C22, C29, C40, C45         |     9 | 100nF ±10% ceramic capacitors (0402) Murata GRM155R61C104K  |
| C9, C47, C48, C50-C54, C56-C59, C61, C62, C63, C65 |    16 | 100pF ±5% ceramic capacitors (0402) Murata GRM1555C1H101J   |
| C25                                                |     1 | 1.0µF ±10% ceramic capacitor (0402) Murata GRM155R60J105K   |
| C28                                                |     1 | 220pF ±10% ceramic capacitor (0402) Murata GRM155R71H221K   |
| C30                                                |     1 | 51pF ±10% ceramic capacitor (0402) Murata GRM1555C1H510J    |

<!-- image -->

## MAX2163 Evaluation Kit

Features

- ♦ Easy Evaluation of the MAX2163
- ♦ 50 Ω SMA Connectors
- ♦ All Critical Peripheral Components Included
- ♦ Fully Assembled and Tested
- ♦ PC Control Software (Available at www.maxim-ic.com)

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2163EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                                                              |
|-------------------------------------------------|-------|--------------------------------------------------------------------------|
| C31, C32, C33                                   |     3 | 10µF ±10% tantalum capacitors (C-case) AVX TAJC106K016                   |
| C66                                             |     1 | 470nF ±10% ceramic capacitor (0402) Murata GRM155R60J474K                |
| J2, J3, J8                                      |     3 | 1 x 2 headers, 2-pin headers, 0.1in centers-cut to fit Sullins PEC36SAAN |
| J4                                              |     1 | Connector, DB25 M PCB connector HD-20 series amp 5747238-4               |
| L2                                              |     1 | 18nH ±2% inductor (0402) Murata LQW15AN18NG00                            |
| L3, L4                                          |     0 | Not installed, inductors                                                 |
| R1, R2, R4-R8, R43, R45-R48, R50, R51, R52, R54 |    16 | 100 Ω ±5% resistors (0402)                                               |
| R14, R25, R36, R37                              |     4 | 0 Ω resistors (0402)                                                     |
| R15                                             |     1 | 20k Ω potentiometer Bourns 3296W-1-203LF                                 |
| R16                                             |     0 | Not installed                                                            |
| R20                                             |     1 | 4.02k Ω ±5% resistor (0402)                                              |
| R21                                             |     1 | 4.7k Ω ±5% resistor (0402)                                               |
| R22                                             |     1 | 21k Ω ±5% resistor (0402)                                                |

## MAX2163 Evaluation Kit

| DESIGNATION                                          |   QTY | DESCRIPTION                                                               |
|------------------------------------------------------|-------|---------------------------------------------------------------------------|
| R23, R38-R41, R55, R57, R58                          |     8 | 10k Ω ±5% resistors (0402)                                                |
| R29, R61                                             |     2 | 51 Ω ±5% resistors (0402)                                                 |
| R30, R34, R35, R59, R60                              |     0 | Not installed, resistors                                                  |
| CAL, MUX, REF, VHF1, VHF2                            |     0 | Not installed                                                             |
| GND1, GND2, GND3, GND4, J1, J16                      |     6 | Test points, PC mini-black Keystone 5001                                  |
| GC1, GC2, J13, J15, J17, PWRDET, REFOUT, TEST, VTUNE |     9 | Test points, PC mini-red Keystone                                         |
| IFOUT, UHFIN                                         |     2 | Connectors, SMA end launch jack receptacles, 0.062in Johnson 142-0701-801 |

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION                                                                    |   QTY | DESCRIPTION                                                              |
|--------------------------------------------------------------------------------|-------|--------------------------------------------------------------------------|
| SCLCLK, SDADIN, VCCBB, VCCBIAS, VCCCP, VCCDIG, VCCLNA, VCCRF1, VCCVCO, VCCXTAL |     0 | Not installed                                                            |
| SHDNB, STBY                                                                    |     2 | 1 x 3 headers, 3-pin headers, 0.1in centers-cut to fit Sullins PEC36SAAN |
| U1                                                                             |     1 | MAX2163ETI+ (28 TQFN-EP*)                                                |
| U2, U5                                                                         |     2 | SN74LV07AD hex buffers/driversOC Texas Instruments SN74LV07AD            |
| U3                                                                             |     1 | Buffer Maxim MAX4217EUA+                                                 |
| U4                                                                             |     0 | Not installed                                                            |
| Y1                                                                             |     1 | 36MHz crystal River Electec 06F36.000M8R60SJF1B                          |
| -                                                                              |     1 | PCB: MAX2163 EVALUATION KIT+                                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 803-946-0690 | www.avxcorp.com             |
| Johnson Components                     | 507-833-8822 | www.johnsoncomponents.com   |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| River Eletec Corp.                     | 408-236-7410 | www.river-ele.co.jp         |
| Texas Instruments Inc.                 | 972-644-5580 | www.ti.com                  |

Note: Indicate that you are using the MAX2163 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

The MAX2163 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

- One power supply capable of supplying at least 100mA at +2.5V
- One dual-output power supply capable of supplying at least 100mA at +3V and -3V
- One RF signal generator capable of delivering at least 0dBm of output power at frequencies up to 1GHz
- One RF spectrum analyzer capable of covering the operating frequency range of the device
- A PC with Windows ® 2000, NT 4.0, XP ® or  later operating system, 64MB of memory, and an available parallel port
- A 25-pin parallel cable
- One dual-output power supply capable of supplying up to 2.5V at &lt; 1mA (to apply gain-control voltages directly)
- (Optional) One multichannel digital oscilloscope
- (Optional) A network analyzer to measure return loss
- (Optional) An ammeter to measure supply current

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit in UHF mode. Do not turn on DC power or RF signal generators until all connections are completed.

- 1) With its output disabled, set the DC power supply to  +2.5V. Connect the power supply to the VCC (J13) (through an ammeter if desired) and GND (J1) terminals on the EV kit. If available, set the current limit to 75mA.
- 2) With its output disabled, set the dual-output DC power-supply voltages to +3V and -3V. Connect the +3V, -3V, and GND terminals of the power supply  to  jumpers  J15,  J17,  and  J16,  respectively.  If available, set the current limits to 50mA.

<!-- image -->

## MAX2163 Evaluation Kit

- 3) With its output disabled, set the RF signal generator to a 557.143MHz frequency and a -100dBm power level. Connect the output of the RF signal generator to the SMA connector labeled UHF on the evaluation board.
- 4) Connect a 25-pin parallel cable between the PC's parallel port and the MAX2163 evaluation board.
- 5) Turn on the ± 3V power supply, followed by the +2.5V power supply. The supply current from the +2.5V supply should read approximately 35mA. Be sure to adjust the power supply to account for any voltage drop across the ammeter.
- 6) Connect the power-supply outputs to GC1 and GC2. Adjust voltages at GC1 and GC2 to approximately +0.3V.
- 7) Install  and run the MAX2163 control software. Software is available for download on the Maxim website at www.maxim-ic.com.
- 8) Load the default register settings from the control software by clicking the Defaults tab at the top of the screen.
- 9) Connect the IFOUT output to a spectrum analyzer or to an oscilloscope. Set the oscilloscope for 50 Ω input impedance.
- 10) Enable the RF signal generator's output.
- 11) If  using  a  spectrum analyzer, set the center frequency of the analyzer to 571kHz and a span of 100kHz. Set the reference level to 0dBm. Adjust the input power of the signal generator until the output level  reaches -9dBm. This is the nominal output level for the IF output. The gain of the receiver can be calculated by taking the difference in decibels between the input and output power.

If  using  an  oscilloscope,  observe  the  571kHz  sine wave. Adjust the input power of the signal generator until the IF output reaches 225mVP-P. This is the nominal output level for the IF output.

Voltage gain can be calculated by:

Gain = 20 x log(VOUT\_P-P/(2 x sqrt(2) x VIN\_RMS))

where VIN\_RMS = sqrt(50 x 10 [ (Pin (dBm) - 30)/10] )

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

## Output Buffer

The MAX2163 EV kit has a buffer with a voltage gain of 2 at the IF output to allow easy interfacing with 50 Ω test equipment. The buffer has a 50 Ω resistor (R29) in series with the output for back-termination. When the IF output from the EV kit is loaded with a 50 Ω test instrument, a voltage-divider is formed by the 50 Ω back-termination resistor and the 50 Ω test  instrument input impedance, dividing the output signal by 2 and negating the effect of the buffer's gain of 2.

When making measurements with an instrument that has a high input impedance, there is no voltage-divider at  the  output  and  the  signal  level  at  the  output  of  the board is twice the signal level at the IF output of the MAX2163 due to the output buffer gain. This extra gain must be accounted for when making measurements with high-impedance test equipment.

## RF Gain-Control Range (GC1)

To measure the gain-control range in the RF stage, follow the steps below:

- 1) Set VGC2 = 1.5V.
- 2) Set VGC1 = 0.3V.
- 3) Adjust the RF input power to achieve -9dBm at the IF output. Record this as the reference output level.
- 4) Set VGC1 = 2.1V, and record the change in the IF output level in dB relative to -9dBm. This change in output power is the gain-control range of the RF stage.
- 5) The RF gain-control range is at least 40dB.
- 6) Note that it may be necessary to increase the input power level with VGC1 = 2.1V to make an accurate level  measurement. If this is necessary, calculate the RF gain-control range by first calculating the gain with VGC1 = 0.3V, then calculate the gain with VGC1 = 2.1V, and take the difference between these two gain levels.

## Baseband Gain-Control Range (GC2)

To measure the gain-control range in the baseband stage, follow the steps below:

- 1) Set VGC1 = 1.5V.
- 2) Set VGC2 = 0.3V.
- 3) Adjust the RF input power to achieve -9dBm at the IF output. Record this as the reference output level.
- 4) Set VGC2 = 2.1V, and record the change in the IF output level in dB relative to -9dBm. This change in output power is the gain-control range of the baseband stage.
- 5) The baseband gain-control range is at least 62dB.
- 6) Note that it may be necessary to increase the input power level with VGC2 = 2.1V to make an accurate level  measurement. If this is necessary, calculate the baseband gain-control range by first calculating the gain with VGC2 = 0.3V, then calculate the gain with VGC2 = 2.1V, and take the difference between these two gain levels.

## Input Signal Range

To measure the dynamic range of the receiver, follow the steps below:

- 1) Set the RF input power to -120dBm. Set to the maximum system gain (VGC1 = VGC2 = 0.3V).
- 2) Slowly increase the RF input power until the IF output reaches -9dBm (225mVP-P). The RF input power at this point is the lower end of the receiver's input signal range.
- 3) Set to the minimum system gain (VGC1 = VGC2 = 2.1V) and set the RF input power to -10dBm. Slowly increase the RF input power until the IF output reaches -16dBm (100mVP-P). The RF input power at this  point  is  the  upper  end  of  the  receiver's  input signal range.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Layout Considerations

The MAX2163 evaluation board can serve as a reference board layout. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss.  Place  supply-decoupling capacitors as close as possible to the device. Solder the package's exposed paddle evenly to the board ground plane for a lowinductance ground connection and for improved thermal dissipation.

The ground returns for the VCO, VTUNE, and charge pump require special layout consideration. The LDO capacitor (C66) and the VCCVCO bypass capacitor (C17) ground returns must be routed back to the ground pad near pins 27 and 28. All loop filter component grounds (C27, C28, C30) and the VCCSYN bypass capacitor (C19) ground must be routed together  back to the GNDSYN pin. The GNDSYN pin must then be connected to the overall ground plane. See Figures 2 through 9 for recommended board layout.

<!-- image -->

## MAX2163 Evaluation Kit

The ground connection of the bypass capacitor on the VCCSYN power-supply input also requires careful consideration. Placing the ground connection too close to the UHFIN input can cause noise on the VCCSYN line to couple into the RF inputs resulting in degraded performance. Bypassing of the VCCSYN power-supply input can be removed if necessary to prevent noise from coupling into the RF inputs.

To ensure proper crystal oscillator startup, place the crystal near the MAX2163 XTAL pin (pin 21). The crystal ground should have a clear, short return back to the MAX2163 ground paddle near XTAL. Minimize the parasitic capacitance (&lt; 0.5pF) between the board traces of XTAL (pin 21) and XTALOUT (pin 22).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

Figure 1. MAX2163 TQFN EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

<!-- image -->

Figure 2. MAX2163 TQFN EV Kit PCB Layout-Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

Figure 3. MAX2163 TQFN EV Kit PCB Layout-Top Silkscreen

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

<!-- image -->

Figure 4. MAX2163 TQFN EV Kit PCB Layout-Top Soldermask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

Figure 5. MAX2163 TQFN EV Kit PCB Layout-Primary Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2163 Evaluation Kit

<!-- image -->

Figure 6. MAX2163 TQFN EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163 Evaluation Kit

Figure 7. MAX2163 TQFN EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2163 Evaluation Kit

<!-- image -->

Figure 8. MAX2163 TQFN EV Kit PCB Layout-Secondary Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2163A Evaluation Kit

Figure 9. MAX2163 TQFN EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_