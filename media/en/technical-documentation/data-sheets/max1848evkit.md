<!-- lastmod 2022-08-03 -->
## General Description

The MAX1848 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains a step-up switching-regulator current source powering three series-connected white LEDs. The circuit provides programmable LED current. The EV kit can be powered from a 2.6VDC to 5.5VDC source.

The MAX1848 features programmable soft-start and LED brightness control. The MAX1848 EV kit demonstrates matching LED brightness with high converter efficiency (87%) to maximize battery life. Operation at 1.2MHz allows the use of tiny surface-mount components.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Central     | 631-435-1110 | 631-435-1824 |
| Murata      | 770-436-1300 | 770-436-3030 |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 |

Note: Please indicate that you are using the MAX1848 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1            |     1 | 3.3µF, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ335MG                  |
| C2            |     1 | 1.0µF, 16V X5R ceramic capacitor (0805) Taiyo Yuden EMK212BJ105KG                   |
| C3            |     1 | 0.22µF, 10V X7R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224KA                  |
| C4            |     1 | 1000pF, 50V X7R ceramic capacitor (0603) Taiyo Yuden UMK107B102KZ                   |
| D1            |     1 | 0.2A, 30V high-speed switching diode (SOD-323) Central Semiconductor Corp. CMDSH2-3 |

- ♦ &gt;87% Efficiency
- ♦ 2.6V to 5.5V Input Voltage Range
- ♦ Analog LED Intensity Control
- ♦ Drives Up to Three Series White LEDs with Uniform Brightness
- ♦ Small, Low-Profile External Components
- ♦ 0.3µA IC Shutdown Current (typ)
- ♦ 1.2MHz Switching Frequency
- ♦ 8-Pin SOT23 Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1848EVKIT | 0°C to +70°C | 8 SOT23      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| D2, D3, D4    |     3 | Right angle white LEDs (SMD 2.8mm x 1.2mm x 1mm)                              |
| L1            |     1 | 47µH, 170mA inductor (low cost) Murata LQH3C470K34 33µH (optimum performance) |
| R1            |     1 | 4.99 Ω ± 1% resistor (0805)                                                   |
| U1            |     1 | MAX1848EKA (8-pin SOT23)                                                      |
| None          |     1 | MAX1848 PC board                                                              |
| None          |     1 | MAX1848 data sheet                                                            |
| None          |     1 | MAX1848 EV kit data sheet                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX1848 Evaluation Kit

## Quick Start

The MAX1848 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- One voltmeter
- Dual power supply 5V, 1A

## Main Output

- 1) Connect a voltmeter to the VOUT pad.
- 2) Make sure both power supplies are set to 0V and off before connecting the power supplies to the circuit.
- 3) Connect a 5V supply to the VIN pad. Connect the power-supply ground to the GND pad.
- 4) Connect a 5V supply to the VCTRL pad. Connect the power-supply ground to the GND pad.
- 5) Turn on the VIN power supply and set it to 3.3V.
- 6) Turn on the VCTRL power supply, vary the VCTRL between 0 and 2V and observe the variation in brightness of the LEDs.
- 7) Verify  that  the  output,  VOUT  is  approximately  10V when the VCTRL power supply is 2V.
- 8) Vary the VIN power supply from 2.6V to 5.5V and verify that the LED brightness remains constant.
- 9) Verify that the LEDs are off when VCTRL drops below 100mV.

## Detailed Description

The MAX1848 EV kit contains a switching-regulator current-source circuit. The EV kit's circuit is configured to drive three series-connected LEDs. The EV kit can be powered by a 2.6V to 5.5V DC source.

The MAX1848 EV kit features programmable LED brightness by controlling LED current, overvoltage protection, and up to 87% efficiency for maximum battery life.

## LED Current

The current through the LEDs is related to the currentsense resistor (R1) by the following equation:

ILED = VCTRL / (13.33 x R1)

Adjusting the control voltage VCTRL varies the intensity of the LEDs. VCTRL can range from 250mV to 5.5V or (VIN + 2V), whichever is lower. However, with R1 = 4.99 Ω , VCTRL should not exceed +2V in order to keep the LED current below its absolute maximum rating of 30mA.

## Shutdown

The MAX1848 enters shutdown mode when VCTRL drops below 100mV. In shutdown mode, the MAX1848 quiescent current is reduced to 0.3µA. The MAX1848 comes out of shutdown mode when VCTRL rises above 250mV.

## Overvoltage Protection

Overvoltage protection occurs when VOUT is above 13.25V (typ). The EV kit comes out of the overvoltage protection when VOUT falls below 12.25V (typ). This protects the MAX1848 and white LEDs during a fault condition.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Soft-Start

The soft-start feature limits the inrush current during startup. Capacitor C3 determines the startup delay time for  the  EV  kit.  The  delay  time  for  the  EV  kit  is  set  to 18.3ms.

The following equation can be used to configure the EV kit for other startup times:

<!-- formula-not-decoded -->

## where

t = desired startup time delay

## MAX1848 Evaluation Kit

<!-- image -->

Figure 1. MAX1848 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1848 Evaluation Kit

<!-- image -->

Figure 2. MAX1848 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1848 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1848 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4