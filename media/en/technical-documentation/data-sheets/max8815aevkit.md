<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8815A evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) for evaluating the MAX8815A step-up converter. The MAX8815A is a 1A (maximum load), 97% efficient, 35µA quiescent current step-up converter with True Shutdown™ and is ideal for use in DSC, DVC, and other handheld applications. The MAX8815A EV kit is designed for a 5V output and also provides a jumper for evaluation of fixed-frequency pulse-width-modulation mode (FPWM) or normal mode.

True Shutdown is a trademark of Maxim Integrated Products, Inc.

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE                    |
|---------------------------|--------------|----------------------------|
| NEC TOKIN America, Inc.   | 408-324-1790 | www.nec-tokinamerica.com   |
| Sullins Electronics Corp. | 760-744-0125 | www.sullinselectronics.com |
| Taiyo Yuden               | 408-573-4150 | www.t-yuden.com            |
| TOKO                      | 847-297-0070 | www.toko.com               |

Note: Indicate that you are using the MAX8815A when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                      |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------------------|
| C1A           |     0 | Not installed, capacitor                                                                                                         |
| C1B           |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ106KG, or equivalent                                            |
| C2A           |     0 | Not installed, capacitor                                                                                                         |
| C2B           |     1 | 22µF/10V, 70m Ω ESR tantalum capacitor NEC Tokin PSLB31A226M                                                                     |
| C3            |     1 | 0.1µF ±20%, 10V X5R ceramic capacitor (0402) Taiyo Yuden LMK105BJ104MV                                                           |
| JU1, JU2      |     2 | 3-pin headers 1 x 36-pin headers, 0.1in centers (comes in 1 x 36-pin strips, cut to fit) Sullins PEC36SAAN Digi-Key S1012E-36-ND |

## Features

- ♦ Up to 97% Efficiency with Internal Synchronous Rectifier
- ♦ Low 35µA (Switching) Quiescent Current
- ♦ Guaranteed 1A Output Current at 5V from 2.5V Input
- ♦ Guaranteed 500mA Output Current at 5V from 1.8V Input
- ♦ Low-Noise Constant Frequency Operation (FPWM Mode)
- ♦ 2MHz PWM Switching Frequency
- ♦ Preset (5V) or Adjustable Output (3.3V to 5V)
- ♦ Controlled Current in Soft-Start Limits Inrush Current
- ♦ True Shutdown
- ♦ Internal Compensation
- ♦ Overload/Short-Circuit Protection
- ♦ 0.1µA Shutdown Current
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8815AEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                       |
|---------------|-------|---------------------------------------------------|
| L1            |     1 | 1.2µH inductor TOKO A1124BS-1R2 (DE4512CK Series) |
| R1            |     0 | PCB short, resistor (0402)                        |
| R2            |     0 | Not installed, resistor (0402)                    |
| R3            |     1 | 100 Ω ±1% resistor (0402)                         |
| U1            |     1 | MAX8815AETB+ (10 TDFN-EP, 3mm x 3mm)              |
| -             |     1 | PCB: MAX8815A Evaluation Kit+                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8815A Evaluation Kit

## Quick Start

## Recommended Equipment

- A 1.2V to 5.5V power supply capable of delivering 2.5A
- One voltmeter (DMM)
- Load capable of sinking 1A
- Ammeter (optional)

## Procedure

The MAX8815A EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Preset the power supply to 3.6V.
- 2) Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 3) Verify  that  the  shunt  on  JU1  is  connected  to  OFF (pins 2 and 3). Verify that the shunt on JU2 is connected to NORM (pins 2 and 3).
- 4) Connect the positive power-supply terminal to the pad on the EV kit labeled IN. Connect the powersupply ground terminal to the pad on the EV kit labeled GND.
- 5) Connect a voltmeter across the OUT pad on the EV kit and the GND pad on the EV kit.
- 6) Connect the 1A load between OUT and GND with the load set to minimum.
- 7) Turn on the power supply.
- 8) Verify  that  the  voltmeter  is  reading  0V  and  input current is less than 1µA.
- 9) Remove the shunt from the OFF position (pins 2 and 3) of JU1 and place it on the ON position (pins 1 and 2) of JU1.
- 10) Verify the voltmeter is measuring between 4.95V and 5.05V.
- 11) Slowly increase the load up to 1A and verify the output voltage.

## Detailed Description

## Normal and FPWM Mode

The MAX8815A operates in two modes, normal mode and FPWM mode, depending on the voltage at SKIPB. SKIPB is assigned to pin 2 on jumper JU2. Connecting a  shunt  to  pins  2  and  3  of  JU2  sets  the  IC  to  normal operation. Connecting a shunt to pins 1 and 2 sets the IC to FPWM mode only.

## Normal Mode

Drive SKIPB low to select the normal mode of operation.  In  this  mode,  the  device  operates  in  PWM  only when driving medium to heavy loads. As the load current  decreases and crosses the low-power idle-mode threshold, the PWM comparator and oscillator are disabled. In this low-power mode, switching occurs only as needed to service the output. This improves the efficiency for light loads, and the device consumes only 35µA under no-load conditions. The threshold for entering skip mode is approximately 90mA load with a 3.6V input and 5V output. When switching in normal mode, the inductor current terminates at zero for each switching cycle.

## FPWM Mode

Drive SKIPB high to select the FPWM mode of operation. The IC switches at a constant frequency (2MHz) and modulates the MOSFET switch pulse width to control the power transferred per cycle to regulate the output voltage. Switching harmonics generated by fixed-frequency operation are consistent and easily filtered. This is important in noise-sensitive applications.

The MAX8815A does not allow for dynamic switching between normal and FPWM modes.

## Shutdown Mode

Connect ON to GND or connect a shunt to pins 2 and 3 of JU1 to place the MAX8815A in shutdown mode and reduce supply current to 0.1µA. In shutdown, the control circuitry, internal switching MOSFET, and synchronous rectifier turn off and LX becomes high impedance. Connect ON to IN or connect a shunt to pins 1 and 2 of JU1 for normal operation.

## Evaluating Other Output Voltages

The MAX8815A EV kit is designed for the preset output voltage of 5V. To set other output voltages, use external feedback resistors.

To set the output voltage between 3.3V and 5V, cut the PCB short on resistor R1, and connect FB to the center of  an  external  resistor  voltage-divider  between OUT and GND, as shown in Figure 2. Select the value of R2 no more than 500k Ω ,  and then calculate the value for R1 as follows:

<!-- formula-not-decoded -->

where VFB is the FB regulation voltage, 1.265V (typ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8815A Evaluation Kit

<!-- image -->

Figure 1. MAX8815A EV Kit Schematic-Fixed 5V Output

<!-- image -->

Figure 2. MAX8815A EV Kit-Adjustable Output Voltage

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8815A Evaluation Kit

<!-- image -->

Figure 3. MAX8815A EV Kit Component Placement GuideComponent Side

Figure 4. MAX8815A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX8815A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_