<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX6643LB evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the operation of the MAX6643LB fan controller. The MAX6643LB monitors its internal temperature and the junction temperature of an optional external diodeconnected transistor. Based on the temperature measurements, the MAX6643LB generates a PWM waveform that drives the gate of an external n-channel power MOSFET, which modulates the cooling fan's power supply, thus providing automatic fan-speed control.

The high- and low-temperature fan-control thresholds are easily programmable by connecting programming pins to ground or supply or leaving them disconnected. The fan-control algorithm is optimized to minimize the audible artifacts of varying fan speeds. Fan failure is detected by monitoring the fan's tachometer output. Also provided is an over-temperature output with pinprogrammable threshold.

The EV kit can also be used to evaluate other versions of the MAX6643/MAX6644 fan-controlling ICs.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                         |
|----------------|-------|---------------------------------------------------------------------|
| C1             |     1 | 47µF ±20%, 6.3V OxiCap capacitor (C) AVX NOJC476M006                |
| C2             |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K  |
| C3, C5         |     0 | Not installed, capacitors (0603)                                    |
| C4             |     1 | 2200pF ±10%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H222K |
| JU1-JU8        |     8 | 3-pin headers                                                       |
| N1             |     1 | 30V, 1.4A n-channel MOSFET (SOT23) Fairchild Semiconductor NDS351AN |
| R1, R3, R6, R7 |     4 | 4.7k Ω ±5% resistors (0603)                                         |
| R2             |     0 | Not installed, resistor (1210)                                      |
| R4, R5         |     0 | Not installed, resistors (0603)                                     |
| TP1, TP2       |     2 | Test points (red)                                                   |
| U1             |     1 | MAX6643LBBAEE (16-pin QSOP)                                         |
| None           |     8 | Shunts (JU1-JU8)                                                    |
| None           |     1 | MAX6643LB EV kit board                                              |

Features

- ♦ Automatic Fan-Speed Control
- ♦ Local and Remote Temperature Sensing
- ♦ Programmable Low, High, and Over-Temperature Thresholds
- ♦ Minimizes Acoustic Noise
- ♦ Fan-Failure Detection
- ♦ Configured for 5V to 12V Fans Up to 1A
- ♦ Reconfigurable for Up to Two Fans
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested
- ♦ Evaluates All Versions of the MAX6643 and MAX6644 (IC Replacement Required)

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE   |
|----------------|--------------|--------------|
| MAX6643LBEVKIT | 0°C to +70°C | 16 QSOP      |

## Quick Start

Note: The Quick Start section assumes that the high, low, and over-temperature thresholds of +40°C, +30°C, and +60°C, respectively, are not exceeded under normal operating conditions. To reconfigure the EV kit for other operating temperatures, see the Temperature Thresholds section.

## Recommended Equipment

- 5V, 1A, power supply (PS1)
- Fan with tachometer output, rated to operate between 5V to 12V at 200mA to 500mA
- Power supply capable of driving 5V to 12V load at 1A (PS2)
- Oscilloscope (e.g., Tektronics TDS3014 or equivalent)

The MAX6643LB EV kit is fully assembled and tested. Follow these steps to verify the MAX6643LB EV kit board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  no  shunts  are  installed  on  jumpers  JU1 and JU8 to configure the high-temperature threshold to +40°C.
- 2) Verify that no shunt is installed on jumper JU2. Verify that a shunt is installed across pins 2 and 3 of

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

## MAX6643LB Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX        | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Fairchild  | 888-522-5372 | -            | www.fairchildsemi.com |
| Murata     | 770-436-1300 | 770-436-3030 | www.murata.com        |

Note: Indicate that you are using the MAX6643LB EV kit when contacting these component suppliers.

jumper JU3. This configures the low-temperature threshold to +30°C.

- 3) Verify that a shunt is installed across pins 1 and 2 of jumper JU4. This enables fan-failure detection through the fan's tachometer output.
- 4) Verify that a shunt is installed across pins 2 and 3 of jumper JU5 to configure the EV kit to PWM control the fan speed.
- 5) Verify that shunts are installed across pins 2 and 3 of jumpers JU6 and JU7 to configure over-temperature threshold to +60°C.
- 6) Connect the PS1 power supply across the VDD and GND PC board pads located above capacitor C1.
- 7) Connect the PS1 power supply across the VGFAN and GND PC board pads located near jumpers JU6 and JU7.
- 8) Preset the PS2 power supply to the operating voltage of the cooling fan.
- 9) Connect the PS2 power supply across the VFAN and GND PC board pads located near resistor R2.
- 10) Connect the fan's positive and negative supply terminals across FAN+ and FAN- PC board pads located near MOSFET N1. Connect the fan's tachometer output terminal to FAN\_IN1 PC board pad.
- 11) Preset the oscilloscope channel 1 voltage scale to 5V/div and time scale to 20ms/div.
- 12) Preset the oscilloscope to measure the duty cycle of the channel 1 waveform.
- 13) Connect the channel 1 oscilloscope probe across TP2 and GND PC board pads.
- 14) Turn on power supplies PS1 and PS2.
- 15) Verify that the fan is rotating.
- 16) Verify  that  after  the  spin-up  period,  channel  1  displays a square waveform with approximately 30% duty cycle.
- 17) Increase the ambient temperature by blowing hot air on the MAX6643LB IC.
- 18) Verify that the channel 1 waveform duty cycle and the fan's speed increase.
- 19) Once the channel 1 duty cycle reaches 40%, stop blowing hot air.
- 20) Let the IC cool down and verify that the channel 1 waveform's  duty  cycle  and  the  fan's  speed decrease.

## Detailed Description

The MAX6643LB EV kit circuit uses the MAX6643LB controller (U1) to monitor its internal temperature and that of an optional external diode-connected transistor. The EV kit  circuit  uses  the  temperature measurement results to automatically adjust the speed of a user-supplied fan to ensure optimum cooling while minimizing acoustic noise from the fan. The MAX6643LB controls the fan speed by generating a variable duty-cycle PWM signal that drives the gate of MOSFET N1. N1 pulse-width modulates the fan's power supply, which adjusts the fan speed approximately in proportion to the duty cycle. The fan can be set to full  speed by pulling the FULLSPD pin high using jumper JU5.

The MAX6643LB EV kit features programmable low-, high-, and over-temperature thresholds. When the measured temperature exceeds the high-temperature threshold, the MAX6643LB starts incrementing the duty cycle of the waveform driving MOSFET N1 in 1.5% steps every 4s. This process continues until the duty cycle (and therefore the fan's speed) becomes high enough to reduce the temperature below the high-temperature threshold. Note that the higher of the internal or external temperatures is used for determining the PWM duty cycle. The gradual change in the duty cycle reduces the audibility of the variations in the fan's speed. When the measured temperature goes below the low-temperature threshold, the MAX6643LB starts decrementing the duty cycle of the pulse-driving MOSFET N1. This process continues until the duty cycle is low enough to allow the operating temperature to rise above the low-temperature threshold. When the operating temperature exceeds the over-temperature threshold, the MAX6643LB asserts a logic-low

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6643LB Evaluation Kit

on the OT pin.  This  signal  is  available  at  the OT PC board pad.

Table 2. High-Temperature Setting

## EV Kit Configuration

The MAX6643LB EV kit features several jumpers to reconfigure the EV kit for various modes of operation.

## Fan-Failure Detection

Fans equipped with tachometer outputs can be monitored through the FAN\_IN1 and FAN\_IN2 pins. For use with a single fan, FAN\_IN1 and FAN\_IN2 pads are shorted together by resistor R4. To access the FAN\_IN2 pin of the MAX6643LB, cut open the PC short across resistor R4 and replace resistor R5 with a 4.7k Ω resistor.

Fan-failure detection is enabled during the spin-up period and whenever the measured temperature is high enough to cause the PWM duty cycle to be 100%. Upon detecting a fan failure, the MAX6643LB pulls the FANFAIL pin low, which may be used to trigger an alarm. This function can be disabled by removing the shunt on jumper JU4.

The MAX6644 can detect fan failure by measuring voltage pulses across current-sensing resistor R2 (when properly selected) or by detecting a 'locked-rotor' output on fans so equipped. See Table 1 for MAX6643LB TACHSET options accessible through jumper JU4.

Table 1. Jumper JU4 Function

| SHUNT LOCATION         | TACHSET PIN CONNECTIONS   | EV KIT FUNCTION                                          |
|------------------------|---------------------------|----------------------------------------------------------|
| 1 and 2                | Connected to VDD          | Detects fan failure through the fan's tachometer output. |
| 2 and 3 (MAX6644 only) | Connected to GND          | Fan-failure detection disabled.                          |
| Not installed          | Floating                  | Fan-failure detection disabled.                          |

## Temperature Thresholds

The MAX6643LB EV kit high, low, and over-temperature thresholds are set by configuring jumpers JU1 to JU3 and JU6 to JU8. To reconfigure the high-, low-, and over-temperature thresholds, see Table 2, Table 3, and Table 4, respectively.

<!-- image -->

| JUMPER JU8 SHUNT POSITION   | JUMPER JU1 SHUNT POSITION   | EV KIT HIGH- TEMPERATURE THRESHOLD (°C)   |
|-----------------------------|-----------------------------|-------------------------------------------|
| 2 and 3                     | 2 and 3                     | +20                                       |
| 2 and 3                     | Not installed               | +25                                       |
| 2 and 3                     | 1 and 2                     | +30                                       |
| Not installed               | 2 and 3                     | +35                                       |
| Not installed               | Not installed               | +40*                                      |
| Not installed               | 1 and 2                     | +45                                       |
| 1 and 2                     | 2 and 3                     | +50                                       |
| 1 and 2                     | Not installed               | +55                                       |
| 1 and 2                     | 1 and 2                     | +60                                       |

Table 3. Low-Temperature Setting

| JUMPER JU2 SHUNT POSITION   | JUMPER JU3 SHUNT POSITION   | EV KIT LOW- TEMPERATURE THRESHOLD (°C)   |
|-----------------------------|-----------------------------|------------------------------------------|
| 2 and 3                     | 2 and 3                     | +15                                      |
| 2 and 3                     | Not installed               | +20                                      |
| 2 and 3                     | 1 and 2                     | +25                                      |
| Not installed               | 2 and 3                     | +30*                                     |
| Not installed               | Not installed               | +35                                      |
| Not installed               | 1 and 2                     | +40                                      |
| 1 and 2                     | 2 and 3                     | +45                                      |
| 1 and 2                     | Not installed               | +50                                      |
| 1 and 2                     | 1 and 2                     | +55                                      |

Table 4. Over-Temperature Setting

| JUMPER JU6 SHUNT POSITION   | JUMPER JU7 SHUNT POSITION   | EV KIT OVER- TEMPERATURE THRESHOLD (°C)   |
|-----------------------------|-----------------------------|-------------------------------------------|
| 2 and 3                     | 2 and 3                     | +60*                                      |
| 2 and 3                     | Not installed               | +65                                       |
| 2 and 3                     | 1 and 2                     | +70                                       |
| Not installed               | 2 and 3                     | +75                                       |
| Not installed               | Not installed               | +80                                       |
| Not installed               | 1 and 2                     | +85                                       |
| 1 and 2                     | 2 and 3                     | +90                                       |
| 1 and 2                     | Not installed               | +95                                       |
| 1 and 2                     | 1 and 2                     | +100                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6643LB Evaluation Kit

## MAX6643LB Full-Speed Operation

When the FULLSPD pin is pulled low, the MAX6643LB controls the fan speed by generating a variable dutycycle PWM signal that drives the gate of MOSFET N1. The fan can be set to run at full speed by forcing the PWM signal to 100% duty cycle. To choose between the two modes of operation, see Table 5.

Table 5. Full-Speed Setting

| JUMPER JU5 SHUNT POSITION   | FULLSPD PIN CONNECTIONS   | EV KIT FUNCTION                                                 |
|-----------------------------|---------------------------|-----------------------------------------------------------------|
| 1 and 2                     | Connected to VDD          | Fan runs at full speed.                                         |
| 2 and 3                     | Connected to GND          | Fan speed is set by PWM waveform driving the gate of MOSFET N1. |

## Temperature Sensing

The MAX6643LB senses its internal temperature and that  of  an  external  diode-connected transistor. The higher of the two temperatures is used to control the fan's speed. To measure external temperature, connect the DXP and GND PC pads to a diode-connected transistor  (e.g.,  Central  Semiconductor CMPT3906). For remote temperature sensing, use twisted-pair wire to reduce noise coupling at the DXP pin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluating Other MAX6643 and MAX6644 Versions

The MAX6643LB EV kit can also evaluate other versions of the MAX6643 and MAX6644 IC. The MAX6643LB IC must be removed and replaced with the desired IC. Refer to the MAX6643/MAX6644 IC data sheet for detailed information about these parts. Depending upon your version of the MAX6643/MAX6644, some of the external components may need replacement.

When evaluating other versions of the MAX6643/ MAX6644, the FULLSPD signal may be inverted. Refer to the MAX6643/MAX6644 data sheet for the specific IC being evaluated.

To use the MAX6644 fan-supply current-sensing feature, cut open the PC trace short across resistor R2 on the MAX6643LB EV kit board. Select an appropriate value and wattage for resistor R2 by referring to the MAX6644 IC data sheet, place a 0.1µF capacitor across C3, and remove resistor R3. To configure fan-failure detection mode, see Table 1.

## MAX6643LB Evaluation Kit

Figure 1. MAX6643LB EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6643LB Evaluation Kit

Figure 2. MAX6643LB EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX6643LB EV Kit PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6643LB Evaluation Kit

Figure 4. MAX6643LB EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7