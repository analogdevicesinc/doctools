<!-- lastmod 2022-08-03 -->
## General Description

The MAX4188 evaluation kit (EV kit) simplifies evaluation of the MAX4188 triple, low-power, current-feedback amplifier. The MAX4188 amplifier is set to a gain of +2V/V. SMA connectors and 50 Ω terminating resistors are included for 50 Ω test  equipment compatibility. For video test equipment compatibility, simply change the terminating resistors to 75 Ω and change RF and RG resistors  to  the  values  shown  in  the  MAX4188/ MAX4189/MAX4190 data sheet.

The EV kit comes with the MAX4188 installed. To evaluate the MAX4189, order a free sample (MAX4189ESD), replace the MAX4188 with the MAX4189 on the EV board, and change the gain-setting and feedback resistors for unity  gain  as  shown  in  the  MAX4188/MAX4189/ MAX4190 data sheet.

## \_\_\_\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ Component List

| DESIGNATION                        |   QTY | DESCRIPTION                                                                 |
|------------------------------------|-------|-----------------------------------------------------------------------------|
| C1, C4                             |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| C2, C5                             |     2 | 0.33µF, 10% ceramic capacitors                                              |
| C3, C6                             |     2 | 0.01µF, 10% ceramic capacitors                                              |
| R1-R6                              |     6 | 49.9 Ω , 1% resistors                                                       |
| RF1, RF2, RF3, RG1, RG2, RG3       |     6 | 390 Ω , 1% resistors                                                        |
| IN1+, IN2+, IN3+, OUT1, OUT2, OUT3 |     6 | SMA connectors                                                              |
| JU1, JU2, JU3                      |     3 | 2-pin header                                                                |
| U1                                 |     1 | MAX4188ESD                                                                  |
| None                               |     1 | MAX4188 EV kit PC board                                                     |
| None                               |     3 | Shunts for JU1, JU2, JU3                                                    |

## Component Suppliers

| SUPPLIER*   | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (803) 946-0690 | (803) 626-3123 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Fast Enable/Disable Times (120ns/35ns)
- ' Very Low Switching Transient (45mVp-p)
- ' Single +5V or Dual ±5V Supply Operation
- ' 130MHz -3dB Bandwidth
- ' 350V/µs Slew Rate
- ' 70MHz -0.1dB Gain Flatness
- ' 0.04%/0.32% Gain/Phase Errors (RL = 150 Ω )
- ' Fully Assembled and Tested Surface-Mount Board

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART**       | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX4188EVKIT | -40°C to +85°C | 14 SO        |

## Quick Start

The MAX4188 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) The circuit requires supply voltages of ±2.25V to ±5.5V. For evaluation purposes, connect a +5V supply to the pad labeled VCC and a -5V supply to the pad labeled VEE. Connect power-supply ground to the pad labeled GND.
- 2) Connect an output (OUT1-OUT3) to an oscilloscope input. Remove shunt from the corresponding jumper (JU1-JU3) to enable the selected amplifier.
- 3) Turn on the power supply. Apply a ±1.35V signal to the appropriate amplifier input (IN1-IN3). The 100 Ω load (chosen for ease of evaluation) limits the output voltage range. Wider output voltage swings are achievable with lighter loads. See the MAX4188/ MAX4189/MAX4190 data sheet.
- 4) Verify the output signal on the oscilloscope.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Setting the Voltage Gain

The gain of the MAX4188's amplifiers can be individually set by changing the appropriate feedback (RF) and gain-set (RG) resistors. For example, the gain of amplifier 1 can be set using resistors RF1 and RG1. Refer to the MAX4188/MAX4189 data sheet for recommended values.

## Enable/Disable Control

The MAX4188 provides DISABLE pins to enable or disable each of the three outputs and isolate the amplifiers from the external inputs. Jumpers JU1-JU3 can be used to manually control each DISABLE pin. An external controller may also be used by connecting the controller to the appropriate disable pad ( DISABLE\_ )  and removing the corresponding jumper shunt. The amplifiers default to  the  enable mode if the DISABLE pin is left  floating/ unconnected. For a single +5V supply or dual ±5V supplies,  the DISABLE inputs are CMOS-logic compatible. The logic threshold is VCC - 2.5V.

## Layout Considerations

The PC board layout has been optimized for highspeed signals and low distortion, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C2, C3, C5, C6) have been placed as close to the amplifier's supply pins as possible. Capacitance at the inverting input pins has been minimized by reducing the length and width of the input and feedback traces and by using 0805-size feedback and gain-set resistors.

Figure 1. MAX4188 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX4188 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3.  MAX4188 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4188 Evaluation Kit

Figure 4.  MAX4188 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 5.  MAX4188 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->