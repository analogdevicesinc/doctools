<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX2683/MAX2684 evaluation kits (EV kits) simplify evaluation of the MAX2683/MAX2684 3.4GHz to 3.8GHz downconverter mixers. The EV kits are fully assembled and tested, allowing simple evaluation of all device functions. All signal ports utilize SMA connectors, providing a convenient interface to RF test equipment.

The MAX2683/MAX2684 are downconversion mixers intended for operation in the 3.4GHz to 3.8GHz frequency range. The MAX2683 is optimized for downconversion to  IF  frequencies between 100MHz and 400MHz, and allows high-side or low-side LO injection. The MAX2684 is  optimized for IF frequencies between 800MHz to 1000MHz and only allows low-side LO injection. A logiclevel enabled LO frequency doubler allows the external LO source to run at half frequency, or at full frequency if disabled. As assembled, the MAX2683/MAX2684 EV kits are configured for operation of the LO at half frequency. A few simple component changes configure the EV kit for operation of the LO at full frequency. In addition, an external resistor allows adjustment of device linearity and supply current.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 3300pF ±10% ceramic capacitor (0402) Murata GRM36X7R332K050 or Taiyo Yuden UMK105B332KW |
| C2            |     1 | 1pF ±0.1pF ceramic capacitor (0603) Murata GRM39COG010B050                              |
| C3, C6, C12   |     3 | 100pF ±5% ceramic capacitors (0603) Murata GRM39COG101J050 or Taiyo Yuden UMK107CH101JZ |
| C4            |     1 | 10µF, 10V tantalum capacitor AVX TAJB106M010                                            |
| C5            |     0 | Not installed                                                                           |
| C7            |     1 | 1000pF ±10% ceramic capacitor (0603) Murata GRM39X7R102K050                             |
| C8, C9        |     2 | 8.2pF ±0.25pF ceramic caps (0603) Murata GRM39COG8R2C050 or Taiyo Yuden UMK107CH8R2CZ   |
| C10           |     1 | 3.3pF ±0.1pF ceramic cap (0603) Murata GRM39COG3R3B050                                  |
| JU1           |     1 | 3-pin header                                                                            |
| L1            |     1 | 1.2nH ±0.2nH inductor (0402) Murata LQP10A1N2C00                                        |

## Features

- ♦ Easy Evaluation of MAX2683/MAX2684
- ♦ All Critical Peripheral Components Included
- ♦ SMA Input and Output Signal Connectors
- ♦ RF Input Matched to 50 Ω at 3600MHz
- ♦ IF Output Matched to 50 Ω at 300MHz (MAX2683)
- ♦ IF Output Matched to 50 Ω at 900MHz (MAX2684)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX2683 EVKIT | -40°C to +85°C | 16 TSSOP-EP* |
| MAX2684 EVKIT | -40°C to +85°C | 16 TSSOP-EP* |

*Exposed paddle

## MAX2683 Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| L3, L4        |     2 | 39nH ±5% inductors (0603) Murata LQG11A39NJ00         |
| L5            |     1 | 3.9nH ±3nH inductor (0603) Murata LQG11A3N9S00        |
| R1, R2        |     2 | 1.21k Ω ±1% resistors (0603)                          |
| R3            |     1 | 1.50k Ω ±1% resistor (0603)                           |
| R4            |     0 | Not installed                                         |
| RFIN, LOX, IF |     3 | SMA connectors (PC edge mount) EFJohnson 142-0701-801 |
| T1            |     1 | Balun transformer, B4F type Toko 617DB-1018           |
| U1            |     1 | MAX2683EUE (16-pin TSSOP)                             |
| VCC, GND      |     2 | Test points                                           |
| None          |     1 | Shunt (JU1)                                           |
| None          |     1 | MAX2683/MAX2684 PC board                              |
| None          |     1 | MAX2683/MAX2684 data sheet                            |
| None          |     1 | MAX2683/MAX2684 EV kit data sheet                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX2683/MAX2684 Evaluation Kits

## MAX2684 Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| L3, L4        |     2 | 6.8nH ±5% inductors (0603) Murata LQG11A6N8J00        |
| L5            |     1 | 3.9nH ±0.3nH inductor (0603) Murata LQG11A3N9S00      |
| R1, R2        |     2 | 1.21k Ω ±1% resistors (0603)                          |
| R3            |     1 | 301 Ω ±1% resistor (0603)                             |
| R4            |     0 | Not installed                                         |
| RFIN, LOX, IF |     3 | SMA connectors (PC edge mount) EFJohnson 142-0701-801 |
| T1            |     1 | Balun transformer, B4F type Toko 617DB-1018           |
| U1            |     1 | MAX2684EUE (16-pin TSSOP)                             |
| VCC, GND      |     2 | Test points                                           |
| None          |     1 | Shunt (JU1)                                           |
| None          |     1 | MAX2683/MAX2684 PC board                              |
| None          |     1 | MAX2683/MAX2684 data sheet                            |
| None          |     1 | MAX2683/MAX2684 EV kit data sheet                     |

- Two low-noise RF-signal generators or equivalent (50 Ω )  sine-wave sources capable of delivering at least 0dBm of output power up to 4GHz. One generator is required for the RF signal source, while the second generator is required for the LO signal source.
- One HP 8561E RF-spectrum analyzer or equivalent that  covers the downconverter mixer's output frequency range, as well as a few harmonics (6GHz).
- Three 50 Ω SMA cables (RG-58A/U or equivalent).
- Optional: digital multimeters (DMMs) to monitor DC supply voltage and supply current.

## Connections and Setup

This section provides step-by-step instructions for getting the EV kit up and running:

- 1) DC Power Supply: Set the power-supply voltage to +5V. Turn the power supply off and connect it to the VCC and GND connections on the EV kit. If desired, place an ammeter in series with the power supply to measure supply current and a voltmeter in parallel with the VCC and GND connections to measure the supply voltage delivered to the device.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1            |     1 | 3300pF ±10% ceramic cap (0402) Murata GRM36X7R332K050 or Taiyo Yuden UMK105B332KW        |
| C2            |     1 | 1pF ±0.1pF ceramic capacitor (0603) Murata GRM39COG010B050                               |
| C3, C6, C12   |     3 | 100 pF ±5% ceramic capacitors (0603) Murata GRM39COG101J050 or Taiyo Yuden UMK107CH101JZ |
| C4            |     1 | 10µF, 10V tantalum capacitor AVX TAJB106M010                                             |
| C5            |     0 | Not installed                                                                            |
| C7            |     1 | 1000pF ±10% ceramic cap (0603) Murata GRM39X7R102K050                                    |
| C8, C9        |     2 | 8.2pF ±0.25pF ceramic caps (0603) Murata GRM39COG8R2C050 or Taiyo Yuden UMK107CH8R2CZ    |
| C10           |     0 | Not installed                                                                            |
| JU1           |     1 | 3-pin header                                                                             |
| L1            |     1 | 1.2nH ±0.2nH inductor (0402) Murata LQP10A1N2C00                                         |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEB                |
|-------------|--------------|--------------|--------------------|
| AVX         | 843-448-9411 | 843-448-1943 | www. avxcorp.com   |
| EFJohnson   | 402-474-4800 | 402-474-4858 | www. efjohnson.com |
| Murata      | 800-831-9172 | 814-238-0490 | www. murata.com    |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www. T-Yuden.com   |
| Toko        | 800-PIK-TOKO | 708-699-1194 | www. tokoam.com    |

## Test Equipment Required

This section lists the test equipment required for evaluating the MAX2683/MAX2684:

- One power supply capable of providing 100mA of supply current over the supply voltage range of +2.7V to +5.5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2683/MAX2684 Evaluation Kits

- 2) RF Signal Source: Set one signal generator to an RF frequency of 3.6GHz at an output power level of -20dBm. Turn the output of the signal generator off. Connect the signal generator to the RF port SMA connector using a 50 Ω SMA cable.
- 3) LO Signal Source: The MAX2683/MAX2684 can be configured for full- or half-frequency operation of the external LO signal source. As assembled, the MAX2683/MAX2684 EV kits are configured for halffrequency operation of the LO signal source. The half-frequency LO port, LOX2, is coupled to the MAX2683/MAX2684 EV kit LO port SMA connector, while the LOX1 port is left unconnected.

To evaluate the devices with the LO doubler enabled, be sure jumper JU1 is shorted to GND ( ENX2 = GND). Set the LO signal generator output power to -5dBm at a frequency of 1650MHz (MAX2683) or 1350MHz (MAX2684). Turn the output of the signal generator off. Connect the signal generator to the LO port SMA connector using a 50 Ω SMA cable.

Evaluation of the devices with full-frequency operation  of  the  LO  signal  source  requires  two  component changes. Remove inductor L5 and leave the LOX2 port unconnected. Short the unpopulated pads of resistor R4 with a 0 Ω resistor.  Disable the LO frequency doubler by shunting jumper JU1 to VCC ( ENX2 = VCC). Set the LO signal generator output power to -5dBm, at a frequency of 3300MHz (MAX2683) or 2700MHz (MAX2684). Turn the output of the signal generator off. Connect the signal generator to the LO port SMA connector using a 50 Ω SMA cable.

- 4) Spectrum Analyzer: Connect the spectrum analyzer to the IF port SMA connector using a 50 Ω SMA cable. Set the center frequency of the spectrum analyzer  to  300MHz  (MAX2683)  or  900MHz (MAX2684). Set the reference level of the spectrum analyzer to -10dBm and the span to 1MHz.

## Analysis

Turn on the power supply and RF and LO signal generators.  The  ammeter should read approximately 55mA with  the  LO  doubler  enabled ( ENX2 = GND) or 40mA with the LO doubler disabled ( ENX2 = VCC). If evaluating the MAX2683, the spectrum analyzer should show an output power of approximately -14dBm at a center frequency of 300MHz. If evaluating the MAX2684, the output power should read approximately -20dBm at a center frequency of 900MHz. Be sure to take into account cable, board, and balun losses when calculating power gain. Typical balun losses are 0.3dB at

<!-- image -->

300MHz for the MAX2683 EV kit and 0.8dB at 900MHz for the MAX2684 EV kit.

## Detailed Description

This section describes the circuitry surrounding the MAX2683/MAX2684 EV kits. Figure 1 is the schematic for  the  MAX2683/MAX2684 EV kits as assembled. For more detailed information covering device operation, refer to the MAX2683/MAX2684 data sheet.

## RF Input

The RFIN port of the MAX2683/MAX2684 is internally biased and requires a DC-blocking capacitor, as well as a matching network for optimum power transfer. Capacitor C1 functions as a DC block, while inductor L1 and capacitor C2 function as a matching network, tuning the RF input of the device for maximum gain at 3.6GHz.

## LO Input and LO Frequency Doubler Control

The MAX2683/MAX2684 include a logic-level-enabled LO frequency doubler. Jumper JU1 controls the LO doubler. A logic-level low on the ENX2 pin enables the frequency doubler, and the external LO signal source operates at half frequency. A logic-level high on the ENX2 pin disables the frequency doubler, and the external LO signal source operates at full frequency. Half-frequency LO signals are applied to the LOX2 port, while full-frequency LO signals are applied to the LOX1 port. Both ports are internally biased and require a  DC-blocking capacitor. The unused LO port should be left unconnected.

The MAX2683/MAX2684 EV kits, as assembled, are configured for operation of the LO signal source at half frequency. Capacitor C6 functions as a DC block, while inductor L5 improves the return loss of the port. The LOX1 port is left unconnected for half-frequency operation.

To evaluate the device with full-frequency operation of the LO source, remove inductor L5 and leave the LOX2 port  unconnected (Figure 2). Short resistor R4 with a 0 Ω resistor.  Capacitor C6 now functions as the DC block for the LOX1 port.

## IF Output

The MAX2683/MAX2684 incorporate differential, opencollector IF output ports for use in either differential or single-ended applications. To ease evaluation of the devices, the MAX2683/MAX2684 EV kits utilize a balun to convert the differential signal to a single-ended signal compatible with 50 Ω test equipment. The IF output of the MAX2683 is tuned for an IF frequency of 300MHz, while the IF output of the MAX2684 is tuned for  an  IF  frequency  of  900MHz. Inductors L3 and L4 provide DC biasing and impedance matching of the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2683/MAX2684 Evaluation Kits

Figure 1. MAX2683/MAX2684 EV Kits Schematic

<!-- image -->

Figure 2. MAX2683/MAX2684 Full-Frequency LO Port Configuration

<!-- image -->

IFOUT+, and IFOUT- ports. Resistor R3 resistively terminates the IF output. Capacitors C8 and C9 provide impedance matching in addition to DC blocking. In the MAX2683, C10 is also part of an impedance-matching network. The balun provides differential to single-ended conversion as well as 4:1 impedance transformation. The IF output is then connected to the IF port SMA connector.

## Linearity and Supply Current Adjustment

The MAX2683/MAX2684 allow the linearity and supply current of the device to be adjusted via an external resistor, R1, to ground. Increased linearity also results in  increased supply current. The MAX2683/MAX2684 EV kits are assembled with a nominal R1 value of 1.21k Ω . Replace R1 with a resistor value in the range of 820 Ω to  2k Ω to  experiment with the linearity of the device.

## Layout and Bypassing

Good PC board layout is an essential aspect of RF circuit design. The EV kits' PC board can serve as a guide for  laying  out  a  board  using  the  MAX2683/MAX2684. Keep PC board trace lengths as short as possible to minimize parasitics and losses. Keep bypass capacitors as close to the device as possible with low-inductance connections to the ground plane.

Capacitor C4, placed near the VCC connection, and capacitors C3 and C7, placed near the device, help to reduce any high-frequency crosstalk. Capacitor C12 and resistor R2, placed near the ENX2 pin on the device, help to filter out any noise that may be coupled into the ENX2 pin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2683/MAX2684 Evaluation Kits

<!-- image -->

Figure 3. MAX2683/MAX2684 EV Kits PC Board LayoutComponent Placement Guide

<!-- image -->

Figure 5. MAX2683/MAX2684 EV Kits PC Board LayoutGround Planes 1 and 2

<!-- image -->

Figure 4. MAX2683/MAX2684 EV Kits PC Board LayoutComponent Side

<!-- image -->

Figure 6. MAX2683/MAX2684 EV Kits PC Board LayoutSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2683/MAX2684 Evaluation Kits

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products