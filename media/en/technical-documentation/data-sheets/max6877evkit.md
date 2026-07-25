<!-- lastmod 2022-08-02 -->
## General Description

The MAX6877 evaluation kit (EV kit) is a complete, fully  assembled and  tested  multivoltage power tracker/sequencer/supervisor controller circuit that demonstrates the capability of the MAX6877 controller. The MAX6877 ensures controlled voltage tracking or sequencing of up to three power-supply outputs during power-up, and controlled voltage during power-down. Voltage tracking ensures that all output voltages of the supplies rise or fall at the same rate while voltage sequencing turns on the outputs in order once the input voltages reach stability. The EV kit circuit features FAULT and PG/ RST output signals to indicate fault and power-good conditions, respectively. The circuit's timing parameters and voltage thresholds are reconfigurable. The EV kit board is designed to handle up to 10A per channel.

| DESIGNATION                                |   QTY | DESCRIPTION                                                                                 |
|--------------------------------------------|-------|---------------------------------------------------------------------------------------------|
| C1-C4                                      |     4 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K or TDK C1608X7R1H104K  |
| C5                                         |     1 | 1µF ± 10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K or Taiyo Yuden LMK107BJ105KA |
| C6                                         |     1 | 1200pF ± 5%, 250V C0G ceramic capacitor (0805) TDK C2012C0G2E122J                           |
| C7                                         |     1 | 1000pF ± 5%, 250V C0G ceramic capacitor (0805) TDK C2012C0G2E102J                           |
| C8                                         |     1 | 2200pF ± 5%, 100V C0G ceramic capacitor (0805) TDK C2012C0G2A222J                           |
| C9, C10, C11                               |     0 | Not installed, ceramic capacitors (0603)                                                    |
| C12-C23                                    |     0 | Not installed, ceramic capacitors (1210)                                                    |
| IN1, IN2, IN3, OUT1, OUT2, OUT3, GND (x 6) |    12 | Noninsulated banana jack connectors                                                         |

<!-- image -->

## Features

- ♦ Voltage Tracking of Up to Three Power Supplies During Power-Up/Power-Down
- ♦ Configurable Input Voltage Thresholds Set to 1.05V, 1.58V, and 2.93V
- ♦ Configurable Timing Parameters
- ♦ Output Signals for Circuit Monitoring
- ♦ Channel-Current Capability Up to 10A
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE*      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX6877EVKIT | 0 ° C to +70 ° C | 24 TQFN      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| JU1           |     1 | 3-pin header                                           |
| JU2-JU6       |     5 | 2-pin headers                                          |
| N1, N2, N3    |     3 | 30A, ± 20V n-channel MOSFETs (DPAK) Vishay SUD50N02-06 |
| R1            |     1 | 80.6k Ω ± 1% resistor (0603)                           |
| R2, R4, R6    |     3 | 16.5k Ω ± 1% resistors (0603)                          |
| R3            |     1 | 35.7k Ω ± 1% resistor (0603)                           |
| R5            |     1 | 18.2k Ω ± 1% resistor (0603)                           |
| R7, R8        |     2 | 10k Ω ± 5% resistors (0603)                            |
| R9            |     1 | 100k Ω ± 5% resistor (0805)                            |
| U1            |     1 | MAX6877ETG+ (24-pin TQFN-EP) (4mm x 4mm)               |
| -             |     6 | Shunts (JU1-JU6)                                       |
| -             |     1 | MAX6877 EV kit PC board                                |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Murata      | 770-436-1300 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |
| Vishay      | -            | www.vishay.com        |

Note: Indicate that you are using the MAX6877 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6877 Evaluation Kit

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- DC power supplies:
- One four-channel oscilloscope
- Two voltmeters

One 5V, 100mA  (VCC)

One 1.2V, 10A    (IN1)

One 1.8V, 10A    (IN2)

One 3.3V, 10A    (IN3)

## Procedure

The MAX6877 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for simple board operation. Do not turn on the power supplies until all connections are completed.

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (U1 enabled).
- 2) Verify  that  shunts  are  not  installed  across  jumpers JU2 (autoretry mode enabled) and JU4 ( MARGIN disabled for normal operation).
- 3) Verify that shunts are installed across jumpers JU3 (tracking mode enabled), JU5 (PG/ RST logic-high equals VCC), and JU6 ( FAULT logic-high equals VCC).
- 4) Connect the positive terminal of the 5V power supply to the VCC pad. Connect the ground terminal of this power supply to the GND pad.
- 5) Connect the positive terminal of the 1.2V power supply to the IN1 banana jack. Connect the ground terminal of this power supply to the GND banana jack.
- 6) Connect the positive terminal of the 1.8V power supply to the IN2 banana jack. Connect the ground terminal of this power supply to the GND banana jack.
- 7) Connect the positive terminal of the 3.3V power supply to the IN3 banana jack. Connect the ground terminal of this power supply to the GND banana jack.
- 8) Connect voltmeters or an oscilloscope to the FAULT and PG/ RST pads to capture output signals.
- 9) Connect an oscilloscope to the OUT1, OUT2, and OUT3 pads to observe voltage tracking during power-up and power-down.
- 10) Turn on the VCC power supply.
- 11) Turn on the IN1, IN2, and IN3 power supplies.
- 12) Observe the voltage tracking operation on the oscilloscope.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 13) Verify that OUT1, OUT2, and OUT3 equal 1.2V, 1.8V, and 3.3V, respectively.
- 14) The EV kit is ready for further testing.

## Detailed Description

The MAX6877 EV kit circuit provides tracking/sequencing/supervisor monitoring for up to three power supplies during power-up and power-down using the MAX6877 controller. The controller ensures controlled output-voltage tracking within a specified range or sequence in the proper order after the system power supplies reach voltage stability. The MAX6877 generates all required voltages and timing characteristics to control up to three external n-channel MOSFETs for the OUT1, OUT2, and OUT3 output voltages. All three voltage thresholds are set with external resistors and all timing parameters are set with external capacitors.

The EV kit circuit's undervoltage thresholds are set to 1.05V, 1.58V, and 2.93V (typ). When all the input voltages exceed these thresholds for the tDELAY period of 800µs, the controller turns on the external n-channel MOSFETs in either sequence or tracking mode to enable the system OUT1, OUT2, and OUT3 outputs. During voltage-tracking mode, the MOSFETs are turned on slowly to control the slew rate of each of the output voltages. The voltage at each output OUT\_ is dynamically  forced to track within 125mV of an internal reference ramp voltage. If any of the OUT\_ voltages fail to track within 250mV from the reference ramp within the t FAULT period of 219ms, the FAULT output signal is asserted low and the outputs are powered off. In sequence mode, the outputs are turned on independently one at a time: OUT1 first, OUT2 second, and OUT3 last. The PG/ RST output signal is asserted high once the output voltages exceed their respective voltage thresholds for a 1300µs (tTIMEOUT) period.

## Output Slew-Rate Control

The MAX6877 slew pin requires a capacitor to set the internal reference ramp-voltage slew rate for the power-up/-down tracking phase, the tFAULT time period, and the tRETRY time period. Capacitor C7 (1000pF) connected to the SLEW pin sets the reference rampvoltage slew rate, the tFAULT time period, and the t RETRY time period to 93.5V/s, 219ms, and 3.5s, respectively. Replace capacitor C7 with a different value to adjust the three timing parameters. Use the following equations to calculate the new timing parameter values when replacing capacitor C7:

<!-- image -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where, C7 is in Farads, slew rate is in V/s, and tFAULT and tRETRY are in seconds.

## Delay Control

The MAX6877 DELAY pin requires a capacitor to set the tDELAY period before tracking or sequencing operation  is  enabled.  Capacitor  C6  (1200pF) connected to the DELAY pin sets the tDELAY period to 800µs. Replace capacitor C6 with a different capacitor value to adjust the tDELAY period or remove the capacitor to set the tDELAY period to 200µs. Use the following equation to calculate the new capacitor value when adjusting the t DELAY period:

<!-- formula-not-decoded -->

where, C6 is in Farads, and tDELAY is in seconds.

## Timeout Control

The MAX6877 TIMEOUT pin requires a capacitor to set the tTIMEOUT period, where all the output voltages must have exceeded their respective thresholds, before PG/ RST output is pulled high. Capacitor C8 (2200pF) connected to the TIMEOUT pin sets the tTIMEOUT period to 1300µs. Replace capacitor C8 with a different capacitor value to adjust the tTIMEOUT period, or remove capacitor C8 to set the tTIMEOUT period to 200µs. Use the following equation to calculate the new capacitor value when adjusting the tTIMEOUT period:

<!-- formula-not-decoded -->

where, C8 is in Farads, and tTIMEOUT is in seconds.

## Input Power

The MAX6877 EV kit requires a 2.7V to 5.5V input voltage connected to VCC, IN1, IN2, or IN3 for normal operation. The highest input voltage source at any of these four inputs supplies power to the MAX6877 controller. A 2.7V to 5.5V power supply connected to VCC allows the user to reconfigure the IN1, IN2, and IN3 input thresholds below 2.7V and still maintain proper circuit operation.

## Input Voltages

Once the MAX6877 controller is properly powered, the controller holds the GATE\_ voltage low to keep MOSFETs N1, N2, and N3 off until the voltages at the three inputs (IN1, IN2, and IN3) exceed the input thresholds for a period of tDELAY. After this condition is

<!-- image -->

## MAX6877 Evaluation Kit

satisfied,  the  controller  ramps  up  the  GATE\_  pin  voltages to start a tracking or sequence operation. The EV kit  input  voltage  thresholds  for  IN1,  IN2,  and  IN3  are configured with external resistors to 1.05V, 1.58V, and 2.93V, respectively. If any of the input voltages fall below its respective threshold, the controller immediately  turns  off  all  the  outputs.  The  IN1,  IN2,  and  IN3 input thresholds can be reconfigured by replacing the corresponding feedback resistors indicated in Table 1. Refer to the Undervoltage Lockout Threshold Inputs section in the MAX6877 data sheet to calculate the new resistor values when reconfiguring the EV kit input thresholds.

Tracking or sequencing control of any one of the channels can be disabled by connecting the IN\_ input pad to ground and connecting a source greater than 0.5V to the corresponding SET\_ pad. The IN1, IN2, IN3, OUT1, OUT2, OUT3, and their respective GND (ground) banana jacks should be used when evaluating the EV kit with currents greater than 1A.

## Table 1. Input Threshold Setting

| SOURCE   |   THRESHOLD (V) | FEEDBACK   |
|----------|-----------------|------------|
| IN1      |            1.05 | R5, R6     |
| IN2      |            1.58 | R3, R4     |
| IN3      |            2.93 | R1, R2     |

## Logic-Enabled Input

The MAX6788 controller features input pin EN/ UV , which enables or disables the controller. Disabling the controller initiates  a  power-down tracking operation. Once the power-down tracking operation is complete, the  controller  holds  the  GATE\_  pin  voltage  low  to  turn off MOSFETs N1, N2, and N3 and prevents current flow to the outputs OUT1, OUT2, and OUT3. The EN/ UV pin can be configured using MAX6877 EV kit jumper JU1. See Table 2 for jumper JU1 settings.

## Table 2. Jumper JU1 Configuration (EN/ UV )

| SHUNT POSITION   | EN/ UV PIN              | EV KIT FUNCTION                                                |
|------------------|-------------------------|----------------------------------------------------------------|
| 1-2              | Connected to ABP        | U1 controller enabled                                          |
| 2-3              | Connected to GND        | U1 controller disabled/initiate power- down tracking operation |
| Not Installed    | Connected to EN/ UV Pad | External controller enables or disables U1                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6877 Evaluation Kit

## Autoretry/Latchoff Modes

The MAX6877 controller features a LTCH /RTR input pin to  set  the  controller  in  autoretry  or  latch-off  mode.  In autoretry mode, the controller waits for 3.5s (tRETRY) after a fault condition before automatically restarting a powerup tracking or sequence operation. During the tRETRY period, MOSFETs N1, N2, and N3 are turned off and the FAULT is  asserted low. An autoretry operation requires that all the OUT\_ voltages fall below 142mV (typ).

In latch-off mode, MOSFETs N1, N2, and N3 are latched off,  and the FAULT output is asserted low once a fault condition is detected. To unlatch the MOSFETs and the FAULT output, clear the fault condition and then disable and enable (JU1) the controller or cycle the power supplies at VCC, IN1, IN2, and IN3 on and off.

The autoretry or latch modes can be set by configuring jumper JU2 on the EV kit board. See Table 3 for jumper JU2 configurations.

## Table 3. Jumper JU2 Configuration ( LTCH /RTR)

| SHUNT POSITION   | LTCH /RTR PIN               | EV KIT FUNCTION   |
|------------------|-----------------------------|-------------------|
| Installed        | Connected to GND            | Latch-off mode    |
| Not Installed    | Internally connected to ABP | Autoretry mode    |

## Tracking/Sequence Modes

The MAX6877 controller features a TRK /SEQ input pin to set the controller in tracking or sequence mode. The TRK /SEQ pin can be configured by using the jumper JU3 on the EV kit board. See Table 4 for jumper JU3 settings.

## Table 4. Jumper JU3 Configuration ( TRK /SEQ)

| SHUNT POSITION   | TRK /SEQ PIN                | EV KIT FUNCTION   |
|------------------|-----------------------------|-------------------|
| Installed        | Connected to GND            | Tracking mode     |
| Not Installed    | Internally connected to ABP | Sequence mode     |

## Tracking Mode

The MAX6877 controller initiates a tracking operation after the controller has been powered and all three IN\_ inputs have exceeded their respective thresholds for t DELAY. During tracking operation, the MAX6877 slowly turns on the MOSFETs and monitors the voltages at the OUT\_ outputs. The rising voltage at the outputs is compared with the internal reference slew-rate voltage ramp to ensure that the OUT\_ voltages stay within the ± 250mV differential window. If, for any reason, any OUT\_ voltages fail to track within the ± 250mV of the reference ramp, the FAULT output is asserted low, the power-up/tracking operation is terminated, and all the outputs are quickly powered off. If an OUT\_ voltage is less than the reference ramp voltage by more than 125mV, the controller stops the reference ramp voltage from rising until the slow OUT\_ voltage catches up.

## Sequence Mode

The MAX6877 controller initiates a sequence operation after the controller has been powered and all three IN\_ inputs have exceeded their respective thresholds for t DELAY.  In  sequence mode, the outputs are turned on sequentially with a controlled slew rate: OUT1 first, OUT2 second, and OUT3 last. Once the outputs exceed the VTH\_PG threshold with respect to the input for t TIMEOUT, the PG/ RST is asserted high. If there is a fault condition during the power-up sequence operation before PG/ RST is  asserted high, all the outputs are turned off. During the power-down operation, all the outputs are turned off simultaneously, tracking each other.

## Margin Input

The MAX6877 controller features a MARGIN input pin to disable monitoring functions during normal operation. Disabling the monitoring functions allows the user to vary the IN\_ input supplies below their programmed thresholds without causing signal changes at the PG/ RST and FAULT outputs. Install a shunt on jumper JU4 to disable all monitoring functions before varying the IN\_ supplies to prevent monitoring alerts or faults.

The MARGIN pin can be configured using jumper JU4 on the EV kit board. See Table 5 for jumper JU4 settings.

## Table 5. Jumper JU4 Configuration (MARGIN)

| SHUNT POSITION   | MARGIN PIN                  | EV KIT FUNCTION                                    |
|------------------|-----------------------------|----------------------------------------------------|
| Installed        | Connected to GND            | Margin mode enabled, monitoring functions disabled |
| Not Installed    | Internally connected to ABP | Margin mode disabled, normal operation             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Logic Outputs

The MAX6877 EV kit features two output signals for circuit monitoring. The PG/ RST output is asserted high when all the outputs OUT\_ exceed their respective IN\_ reference thresholds for the selected timeout period, t TIMEOUT. The FAULT output is asserted low when the power-up phase is not completed within the fault period t FAULT or if the OUT\_ voltages fail to track properly.

When the PG/ RST and FAULT outputs are asserted high, they are pulled to VCC through resistors R7 and R8 when shunts are installed across jumper JU5 and JU6, respectively. See Table 6 and Table 7 for jumper JU5 and JU6 configuration. PG/ RST and FAULT outputs are disabled if shunts are not installed across jumpers JU5 and JU6. Connect a voltage source to pin 2 of jumpers JU5 and JU6 to set a different logic-high voltage level.

## MAX6877 Evaluation Kit

## Table 6. Jumper JU5 Configuration

| SHUNT POSITION   | EV KIT FUNCTION                                                                          |
|------------------|------------------------------------------------------------------------------------------|
| Installed        | PG/ RST pullup resistor R7 connected to VCC                                              |
| Not Installed    | Pullup resistor R7 not connected, connect a pullup voltage source to pin 2 of jumper JU5 |

## Table 7. Jumper JU6 Configuration

| SHUNT POSITION   | EV KIT FUNCTION                                                                          |
|------------------|------------------------------------------------------------------------------------------|
| Installed        | FAULT pullup resistor R8 connected to VCC                                                |
| Not Installed    | Pullup resistor R8 not connected, connect a pullup voltage source to pin 2 of jumper JU6 |

<!-- image -->

Figure 1. MAX6877 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6877 Evaluation Kit

Figure 2. MAX6877 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6877 Evaluation Kit

Figure 3. MAX6877 EV Kit PC Board Layout-Component Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6877 Evaluation Kit

Figure 4. MAX6877 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600