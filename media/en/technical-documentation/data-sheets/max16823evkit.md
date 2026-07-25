<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16823 evaluation kit (EV kit) circuit demonstrates a current-controlled LED driver that uses the MAX16823 current regulator. The EV kit is configured to supply 50mA to each of the three output channels and the circuit features 3 series LEDs per channel. Output pads are provided at two channels to evaluate external LEDs rated up to 70mA. Additional output pads are available to evaluate LEDs rated up to 550mA (typ) on one of the channels. The MAX16823 EV kit requires a 6.5V to 16V, 1A power supply for proper operation. However, the MAX16823 IC can accept input voltages from 5.5V to 40V.

The MAX16823 EV kit features pulse-width modulation (PWM) dimming-control inputs and an open LED detection output. The MAX16823 EV kit is a fully assembled and tested printed circuit board (PCB).

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     0 | Not installed, ceramic capacitor (1206)                                            |
| C2, C3        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K                |
| C4            |     1 | 0.015µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H153K               |
| D1-D9         |     9 | Red LEDs (4-PLCC) OSRAM LR E6SF-AABB-1-1                                           |
| JU1-JU4       |     4 | 3-pin headers                                                                      |
| JU5, JU6, JU7 |     3 | 2-pin headers                                                                      |
| Q1            |     1 | 80V, 3A npn transistor (D-PAK) Fairchild Semiconductor MJD31CTF                    |
| R1            |     0 | Not installed, resistor (0805)                                                     |
| R2, R3, R4    |     3 | 4.02 Ω ±1% resistors (0805)                                                        |
| R5            |     1 | 0.4 Ω ±1%, 500mWsense resistor (1206) IRC/TT Electronics LRC-LRF- 1206LF-01-R400-F |
| R6            |     1 | 10k Ω ±5% resistor (0603)                                                          |
| R7            |     1 | 0 Ω ±5% resistor (1206)                                                            |
| TP1           |     1 | PC mini red test point                                                             |
| U1            |     1 | MAX16823ATE+ (16-pin TQFN, 5mm x 5mm x 0.8mm)                                      |
| -             |     7 | Shunts (JU1-JU7)                                                                   |
| -             |     1 | PCB: MAX16823 Evaluation Kit+                                                      |

Features

- ♦ 6.5V to 16V Supply Voltage Range
- ♦ Open LED Detection Output
- ♦ On-Board or External LED Connections
- ♦ 50mA Load Current
- ♦ Configurable 550mA Output Current at OUT\_3
- ♦ Separate PWM Dimming Control for Each Channel
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX16823EVKIT+ | 0°C to +70°C* | 16 TQFN-EP † |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE               |
|---------------------------|--------------|-----------------------|
| Fairchild Semiconductor   | 888-522-5372 | www.fairchildsemi.com |
| IRC/TT Electronics        | 361-992-7900 | www.irctt.com         |
| Murata Mfg. Co., Ltd.     | 770-436-1300 | www.murata.com        |
| OSRAM Opto Semiconductors | 888-446-7726 | www.osram-os.com      |

Note: Indicate that you are using the MAX16823 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 16V adjustable, 1A power supply
- Two digital voltmeters

## Procedure

The MAX16823 EV kit is fully assembled and tested. Follow the steps below to verify operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the power supply's positive terminal to the IN PCB pad on the EV kit. Connect the power supply's  ground terminal to the GND PC pad located directly above the IN pad.

1

## MAX16823 Evaluation Kit

- 2) Connect a digital voltmeter across the IN and GND pads and the other voltmeter across the LEDGOOD and GND pads.
- 3) Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU1, JU2, and JU3 (LEDs at full intensity).
- 4) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU4 (on-board LEDs selected at OUT3), and that a shunt is not installed on jumper JU5 (LEDs current set to 50mA).
- 5) Verify that the shunts are installed on jumpers JU6 and JU7 (on-board LEDs selected at OUT1 and OUT2).
- 6) Turn on the power supply and increase the input voltage to 12V. The LEDs should illuminate with full brightness.
- 7) Verify  that  the  voltmeter  at  LEDGOOD measures approximately 3.4V.

## Detailed Description

The MAX16823 EV kit demonstrates the MAX16823 IC LED driver. The MAX16823 outputs (OUT1, OUT2, and OUT3) are configured to supply 50mA to the on-board LEDs. The MAX16823 EV kit operates over the inputvoltage range of 6.5V to 16V and requires a 1A power supply. The MAX16823 IC can operate from 5.5V to 40V. Refer to the MAX16823 data sheet for proper configuration.

The MAX16823 EV kit outputs are current controlled by monitoring the voltage across the respective output's external low-side sense resistors (R2, R3, and R4). The EV kit  features 3 series-connected LEDs at each channels' output. All outputs provide pads to evaluate external LEDs by bypassing the on-board LEDs after configuring the appropriate jumpers. Two of the outputs can be used to evaluate LEDs with current rated up to 70mA. A third output (OUT\_3) provides 550mA (typ) to the external  user-supplied LEDs using transistor Q1 and current-sense resistor R5.

The MAX16823 EV kit features PC pads to control the PWM dimming function of each output channel. The MAX16823 EV kit also features a PCB pad to monitor the status of the LEDGOOD output, which is pulled up to REG by resistors R6 and R7.

Typically, capacitor C1 is not required if the power supply  is  relatively  close  to  the  EV  kit.  If  long  wires  are used to connect the power supply to the EV kit, surface-mount 1206 PC pads are provided for adding additional bulk capacitance at C1.

## Output Current Setting

The output current for the on-board LEDs is set to 50mA (typ) with resistors R2, R3, or R4.

Use the following equation to adjust the respective channel's output current at OUT1, OUT2, OUT3, or OUT\_3:

<!-- formula-not-decoded -->

where R\_ is the external current-sense resistor at CS1, CS2, CS3, or CS\_3, and ILED is the desired output current in milliamperes.

The output current for the LEDs, with the exception of external LEDs at OUT\_3, can be adjusted to a maximum 70mA by replacing the respective resistor.

When a shunt is installed across pins 1-2 of jumper JU4, and a shunt is installed at jumper JU5, the output current for the external LEDs at OUT\_3 is set to 550mA (typ)  by  the  parallel  resistors  combination  R2  and  R5, connected at CS\_3.

## PWM Dimming

The MAX16823 EV kit features PWM input PCB pads (DIM1, DIM2, and DIM3) that can be used to control LED brightness at each output using external logic signals. Jumpers JU1, JU2, and JU3 control the on and off condition of the EV kit LEDs. Install shunts across pins 1-2 to turn on the LEDs current. Install shunts across pins 2-3 to turn off the LEDs' current. See Table 1 for PWM configuration.

## Table 1. PWM Configuration (JU1, JU2, and JU3)

| SHUNT POSITION   | DIM1, DIM2, DIM3 PINS     | EV KIT FUNCTION   |
|------------------|---------------------------|-------------------|
| 1-2              | REG                       | LEDs on           |
| 2-3              | GND                       | LEDs off          |
| Not installed    | Driven by external source | PWM operation     |

To operate the MAX16823 EV kit in PWM operation, remove the shunts at jumpers JU1, JU2, or JU3 for individual PWM control of the respective channels. Connect digital PWM signals at the DIM1, DIM2, and DIM3 pads with a 2.8V to VIN logic level and squarewave frequencies from DC to 3kHz. Vary the duty cycle to adjust the LED brightness. LED brightness increases when the duty cycle increases and vice versa. When the PWM signal duty cycle at DIM\_ is 100%, the LEDs are fully on.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16823 Evaluation Kit

## LEDGOOD Output

The MAX16823 EV kit features an output pad (LEDGOOD) to monitor the LEDGOOD output logic signal. LEDGOOD is low when one or more LEDs are open, or when a signal  at  any  of  the  DIM  inputs  remains  low  for  a  period greater than the programmed LEDGOOD delay time. LEDGOOD output goes low after the programmed delay period has elapsed. The EV kit delay time is programmed  to  4ms  (min)  using  C4.  Refer  to  the MAX16823 IC data sheet LEDGOOD section for setting the LEDGOOD delay time. To adjust the minimum LEDGOOD delay time, use the following equation:

<!-- formula-not-decoded -->

where C4 is in farads and tdelay is in seconds.

When shunts are not installed at jumpers JU4, JU6, or JU7, LEDGOOD is low.

## Evaluating External LEDs at OUT1 and OUT2

The MAX16823 EV kit can be used to evaluate external LEDs rated up to 70mA at OUT1 and OUT2. Jumpers JU6 and JU7 configure the EV kit for on-board or external  LED operation at outputs OUT1 and OUT2. Install shunts at jumpers JU6 and JU7 to evaluate the EV kit's on-board LEDs. To evaluate external LEDs at OUT1, remove the shunt at JU7. When connecting the external LEDs at OUT1, connect the anode of the first LED at OUT1 and the cathode of the last LED at CS1. To evaluate external LEDs at OUT2, remove the shunt at jumper JU6. When connecting the external LEDs at OUT2, connect the anode of the first LED at OUT2 and the cathode of the last LED at CS2. See Table 2 for jumpers JU6 and JU7 configurations.

Table 2. OUT1 and OUT2 LED Operation (JU6 and JU7)

| SHUNT POSITION   | EV KIT FUNCTION        |
|------------------|------------------------|
| Installed        | On-board LED operation |
| Uninstalled*     | External LED operation |

Evaluating Higher Current LEDs at OUT\_3 The MAX16823 EV kit OUT\_3 PCB pad can be used to evaluate LEDs rated for 550mA (typ). A single BJT (Q1) and resistor R5 provide increased output current capabilities for external LEDs connected at OUT\_3.

<!-- image -->

Jumpers JU4 and JU5 configure OUT\_3 for external LED operation. Jumper JU4 selects on-board or external LED operation, while jumper JU5 selects the current setting for the external LEDs.

To operate the MAX16823 EV kit with the on-board LEDs, install a shunt across pins 2-3 of jumper JU4, and remove the shunt from jumper JU5 to set the onboard LEDs' (D1, D2, and D3) current to 50mA by resistor R2.

To operate the MAX16823 EV kit OUT\_3 with external LEDs, install a shunt across pins 1-2 of jumper JU4. Install a shunt at jumper JU5 to set the external LEDs to the 550mA (typ) current setting using the parallel resistor  combination of R2 and R5. When connecting the external LEDs at OUT\_3, connect the anode of the first LED to the OUT\_3 PCB pad, and the cathode of the last LED at CS\_3. See Tables 3 and 4 for on-board and external LEDs and current-setting configurations.

Table 3. OUT\_3 LED Operation (JU4)

| SHUNT POSITION   | OUT3 PIN       | EV KIT FUNCTION                 |
|------------------|----------------|---------------------------------|
| 1-2              | Connects to Q1 | External LED operation at OUT_3 |
| 2-3*             | Connects to D1 | On-board LED operation          |
| Uninstalled*     | Open           | LEDGOOD = low                   |

*LEDGOOD is low when a shunt is installed at pins 2-3 and external LEDs are not connected at OUT\_3.

Table 4. On-Board or External LED Current Setting (JU5)

| SHUNT POSITION   | CURRENT SETTING                | EV KIT FUNCTION        |
|------------------|--------------------------------|------------------------|
| Not installed    | 50mA through resistor R2       | On-board LED operation |
| Installed        | 550mA through resistors R2, R5 | External LED operation |

For proper operation when using higher current external LEDs at OUT\_3, the minimum input voltage must be:

<!-- formula-not-decoded -->

where 1.2V is the maximum collector-emitter saturation voltage for the npn transistor Q1, VFT(MAX)  is the total forward voltage of all series-connected LEDs at OUT\_3, and Δ VDO is the MAX16823 dropout voltage from IN to OUT\_.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16823 Evaluation Kit

## Input-Voltage Consideration

For proper operation, the EV kit's minimum input voltage must always be:

VIN(MIN) ≥ VFT(MAX) + Δ VDO + VCS(MAX)

where VFT(MAX) is the total forward voltage of all seriesconnected LEDs, Δ VDO is the MAX16823 dropout voltage from IN to OUT\_, and VCS(MAX) is the regulated current-sense voltage.

The EV kit can operate below the minimum VIN(MIN) voltage; however, the output current may not meet the full regulation specification.

## Power Dissipation

Thermal shutdown turns the device off if power dissipation in the MAX16823 IC causes the junction temperature  to  reach  +155°C (typ). The MAX16823 EV kit is configured for operation between the 6.5V to 16V range while powering the on-board LEDs. When configuring the MAX16823 EV kit for other configurations, total power dissipation on the PCB should be considered to prevent thermal shutdown. Verify that components Q1 and R5 power-dissipation ratings are not exceeded when operating external LEDs at OUT\_3.

Figure 1. MAX16823 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16823 Evaluation Kit

Figure 2. MAX16823 EV Kit Component Placement GuideComponents Side

<!-- image -->

<!-- image -->

Figure 3. MAX16823 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16823 Evaluation Kit

Figure 4. MAX16823 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600