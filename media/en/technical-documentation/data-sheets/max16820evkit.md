<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16820 evaluation kit (EV kit) demonstrates a step-down, constant-current, hysteretic controlled switching regulator for driving high-brightness LEDs (HB LEDs) using the MAX16820 controller IC. This EV kit is configured to supply an average output LED current of 1A, and operates from a 5V to 28V supply.

The EV kit eases evaluation of the MAX16820 dedicated pulse-width-modulation (PWM) dimming control and undervoltage lockout (UVLO) features.

The MAX16820 EV kit comes with the MAX16820 installed.  The  MAX16820 EV kit can also be used to evaluate the MAX16819. Contact the factory for free samples of the pin-compatible MAX16819 to evaluate this part.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     0 | Not installed, capacitor (2220)                                                        |
| C2            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1210) Murata GRM32RR71H105K or TDK C3225X7R1H105K |
| C3            |     0 | Not installed, capacitor (1206)                                                        |
| C4            |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K or TDK C1608X7R1C105K |
| D1            |     1 | 30V, 1A Schottky diode (SOD-123) Fairchild Semiconductor FBR130                        |
| JU1           |     1 | 2-pin header                                                                           |
| L1            |     1 | 56µH, 940mA inductor (7.3mm x 8.1mm) Sumida CR75NP-560KC                               |

Features

- ♦ Operates from a 5V to 28V, 1.5A Supply
- ♦ Constant LED Current Control
- ♦ 1A Average LED Current
- ♦ PWM Dimming Control Up to 20kHz
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX16820EVKIT+ | 0°C to +70°C* | 6 TDFN-EP**  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| N1            |     1 | 30V, 2.7A n-channel MOSFET (SOT23) Fairchild Semiconductor FDN359BN |
| R1            |     1 | 0.2 Ω ±1%, 0.5W sense resistor (1206) IRC LRC-LR1206LF-01-R200-F    |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                          |
| U1            |     1 | MAX16820ATT+ (6-pin TDFN-EP, 3mm x 3mm x 0.8mm)                     |
| -             |     1 | Shunt (JU1)                                                         |
| -             |     1 | PCB: MAX16820 Evaluation Kit+                                       |

## MAX16820 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| IRC                     | 361-992-7900 | www.irctt.com         |
| Murata Mfg. Co., Ltd.   | 770-436-1300 | www.murata.com        |
| Sumida Corp.            | 847-545-6700 | www.sumida.com        |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX16820 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 24V, 1.5A DC power supply
- Voltmeter
- LED load rated for at least 1A and a total LED forward voltage drop VFLED ≤ 20V

## Procedure

The MAX16820 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  on  JU1  (MAX16820 disabled).
- 2) Set the DC power-supply output to 24V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the GND pad on the EV kit.
- 5) Connect the power-supply output to the VIN pad on the EV kit.
- 6) Connect the LED load's anode to the LED+ output pad and the cathode to the LED- output pad.
- 7) Enable the power supply.
- 8) Remove the shunt on JU1 (MAX16820 enabled).
- 9) Measure the voltage across the LED+ and LEDpads and verify that the voltmeter reads approximately VFLED.

## Detailed Description

The MAX16820 EV kit features the MAX16820 controller and demonstrates a step-down, constant-current, hysteretic  controlled  regulator  for  driving  HB  LEDs.  The MAX16820 EV kit output is current-controlled by monitoring the voltage across external high-side sense resistor  R1  in  series  with  the  LED  output.  In  hysteretic mode, the MAX16820 EV kit is configured to output an LED current of 1A ±6% (ILED). The MAX16820 VIN rising and falling UVLO threshold points are 5V (max) and 4.5V (min), respectively. The EV kit can operate from a 5V to 28V supply capable of 1.5A.

Typically, capacitor C1 is not required if the power supply is relatively close to the EV kit. If long wires are used to connect the power supply to the EV kit, install up to 10µF of bulk capacitance at the surface-mount 2220 pads provided for C1.

## Jumper Selection

## Enable

EV kit jumper JU1 enables the MAX16820. See Table 1 for JU1 configuration.

## Table 1. MAX16820 Enable (Jumper JU1)

| SHUNT POSITION   | DIM PIN                           | EV KIT FUNCTION                                        |
|------------------|-----------------------------------|--------------------------------------------------------|
| Installed        | Connected to GND                  | MAX16820 disabled                                      |
| Not installed    | Pulled to VCC through resistor R2 | MAX16820 enabled (DIM pin can be used for PWM dimming) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16820 Evaluation Kit

## Hysteretic Mode

To enter hysteretic mode, the following input requirements must be met: set VIN above 5V or above VFLED + 4V (whichever is greater), and provide 1.1A of input current to the EV kit. If low-voltage or low-current input conditions fail to meet the input requirements for hysteretic mode, the MAX16820 controller operates in linear mode providing DC current to the LED load.

The MAX16820's DRV pin drives the external MOSFET (N1) hysteretically. The MAX16820 drives N1 until the LED current reaches the upper current-sense threshold. At that point, the controller disables N1 until the LED current reaches the lower current-sense threshold. The LED current will continuously ripple between ±8% of ILED (1A). To disable the DRV output, set VIN below 4.5V when VIN is falling or install a shunt on jumper JU1.

## Output Current Setting

In hysteretic mode, the MAX16820 EV kit circuit's average LED current (ILED) is configured to 1A by sense resistor R1. See the equation below to design for a different ILED and for selecting a new resistor value. If designing for a higher ILED, verify that the new current setting does not exceed the power rating of components R1, L1, N1, and D1. See the Component Selection section for more information:

<!-- formula-not-decoded -->

where ILED = desired average LED current, VSNSHI (210mV) is the MAX16820's upper-sense-voltage threshold, and VSNSLO (190mV) is the MAX16820's lower-sense-voltage threshold.

<!-- image -->

## Component Selection

Use the MAX16820 Design Calculator, available at www.maxim-ic.com/MAX16819-20-Tool, to make proper  component selections for custom designs and to determine the associated LED ripple current. Increase the value of inductor L1 to decrease ripple current. When prompted by the Design Calculator, the forward voltage of freewheel diode D1 is 0.5V.

## LED Ripple Current

Typically, the LED ripple current equals the inductor ripple current. To reduce the LED ripple current, install optional output capacitor C3. The EV kit provides surfacemount 0603 pads for a capacitor nominal value of 0.1µF.

## LED Dimming

The MAX16820 EV kit features a DIM input PCB pad that can be used for controlling LED brightness. Remove the shunt on jumper JU1 (Table 1). Connect a digital PWM signal with a 2.8V to VIN logic level and a switching frequency between 100Hz and 20kHz. Frequencies lower than 100Hz can introduce flickering in  the  light  output.  Vary  the  duty  cycle  to  adjust  the LED brightness. LED brightness increases when the duty cycle increases and vice versa. When the PWM signal's duty cycle is 100%, the LEDs are fully on.

## Evaluating the MAX16819

The MAX16820 EV kit can also evaluate the MAX16819 controller by replacing IC U1.

Contact the following number for a free sample of the MAX16819ATT+. Maxim samples: 800-998-8800.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16820 Evaluation Kit

<!-- image -->

Figure 1. MAX16820 EV Kit Schematic Diagram

Figure 2. MAX16820 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16820 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16820 Evaluation Kit

Figure 4. MAX16820 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5