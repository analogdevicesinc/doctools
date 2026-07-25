<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3535E evaluation kit (EV kit) is a fully assembled and tested PCB that contains a 2500VRMS isolated RS-485/RS-422 transceiver with ESD protection. The EV kit circuit features a differential driver and one receiver. The circuit's  receiver  is  a  1/8  unit  load  for  the  RS-485 bus and communicates up to 1000kbps. The MAX3535E fail-safe circuitry and driver slew-rate features are demonstrated and easily reconfigured.

Additionally, the EV kit features an H-bridge DC-DC converter to power the isolated section of the MAX3535E RS-485/RS-422 circuit. Input power to the circuit is supplied by a +3V to +5.5VDC source. This circuit uses a full-wave rectifier on the unregulated output and provides unregulated voltage to the MAX3535E internal, linear low-dropout (LDO) regulator. Using an H-bridge design minimizes input ripple current and radiated noise. Undervoltage lockout (UVLO) and thermal shutdown provide for a robust, isolated RS-485/RS-422 transceiver circuit and power supply. The surface-mount transformer provides up to 2500VRMS galvanic isolation and the output is powered from a center-tapped, full-wave rectifier circuit to reduce output voltage ripple.

The isolated H-bridge DC-DC converter operation at 420kHz allows the use of ceramic-only output capacitors and a small transformer.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1, C3        |     2 | 10µF ±10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A106K                 |
| C2, C4        |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K                |
| D1            |     1 | 30V, 200mA Schottky diode (SOT-23) Central Semiconductor CBAT54C                   |
| JU1           |     1 | 3-pin header                                                                       |
| JU2, JU3, JU4 |     3 | 2-pin headers                                                                      |
| R1, R2        |     0 | Not installed, resistors (0805) 10k Ω ±1% resistor recommended                     |
| R3, R4        |     2 | 100k Ω ±5% resistors (0805)                                                        |
| T1            |     1 | 500µH, 3kV RMS 1CT:1:33CT turns transformer (6 pin) HALO Electronics TGMR-340NA5RL |
| U1            |     1 | MAX3535EEWI+ (28-pin Wide SO)                                                      |
| -             |     4 | Shunts (JU1-JU4)                                                                   |
| -             |     4 | Rubber bumpers                                                                     |
| -             |     1 | PCB: MAX3535EEVKIT+                                                                |

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

- ♦ Designed for 2500VRMS Isolation
- ♦ 1/8 RS-485 Unit Load
- ♦ 1000kbps Full-Duplex RS-485/RS-422 Communication (Configurable for Half Duplex)
- ♦ +3.0V to +5.5VDC Input Range
- ♦ Isolated VCC2 Output
- ♦ Center-Tapped, Full-Wave Rectifier Output
- ♦ 420kHz Switching Frequency
- ♦ Undervoltage Lockout (UVLO) and Thermal Shutdown
- ♦ Low-Cost Integrated-FET H-Bridge Design
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX3535EEVKIT+ | 0°C to +70°C* | 28 Wide SO   |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE                 |
|-----------------------|--------------|-------------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com     |
| HALO Electronics      | 650-903-3800 | www.haloelectronics.com |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com          |

Note: Indicate that you are using the MAX3535E when contact- ing these component suppliers.

1

## MAX3535E Evaluation Kit

## Quick Start

## Required Equipment

- One 5V, 1A current-limited power supply with built-in current meter
- One voltmeter
- One logic signal generator
- One oscilloscope

The MAX3535E fail-safe circuitry signals are also provided on the RO1 (receiver output) and RO2 (isolated receiver output) PC pads. Either pad gives a logic-high if A-B is &gt; -10mV, or if A-B floats or shorts. A logic-low is given if A-B is &lt; -200mV. Refer to the Fail Safe section and Table 3 in the MAX3535E IC data sheet for additional information on the fail-safe circuitry and operation.

The circuit's input power is typically a +5VDC source, or  is  operated  from  a  +3V  to  +5.5VDC  source with a corresponding reduction in the output voltage on the isolated side. The EV kit circuit's DC source must provide at least 350mA of current, but can also be operated at lower voltages consistent with the UVLO limit.

The MAX3535E integrates a primary-side controller and H-bridge drivers. The device contains an on-board oscillator,  protection  circuitry,  and  internal  FET  drivers to  provide up to 500mW of power to the primary of transformer T1.

The MAX3535E driver slew rate is reconfigured using jumper JU2 on the EV kit. The slew rate can be configured for 400kbps (slow) operation to minimize EMI radiation  or  1000kbps (fast).  See  the Slew-Rate Selection section for configuring the slew rate.

The circuit's H-bridge DC-DC converter powers the MAX3535E isolated section of the circuit. One of the benefits of the easy-to-use H-bridge DC-DC converter topology is minimized input ripple current, and radiated noise by the inherent balanced nature of the design, with no interruption in the input current. UVLO and thermal shutdown provide for a robust isolated supply. Thermal-shutdown circuitry provides additional protection  against  damage due to overtemperature conditions.  The  MAX3535E IC's UVLO provides controlled turn-on while powering up and during brownouts.

The  surface-mount  transformer  provides  up  to 2500VRMS galvanic isolation and the output is powered from a center-tapped, full-wave rectifier circuit to reduce output voltage ripple. The isolated H-bridge DC-DC converter operation at 420kHz allows the use of ceramic-only output capacitors and a small transformer. The switching-frequency duty cycle is fixed at 50% to control energy transfer to the isolated output and to prevent DC current flow in the transformer.

The PCB is designed for 2500V isolation with 300 mils spacing between the GND and SGND planes. Test points TP1 (GND) and TP2 (SGND) are provided on the PCB for probing the respective ground plane, or to connect the GND to SGND planes for nonisolated evaluation of the circuit.

## Procedure

The MAX3535E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a voltmeter to the VCC2 and SGND PC pads.
- 2) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU1 (receiver enabled).
- 3) Verify that a shunt is not installed across the pins of jumper JU2 (fast slew rate).
- 4) Verify  that  a  shunt  is  installed  across  the  pins  of jumpers JU3 and JU4 (half duplex).
- 5) Connect the +5V power supply to the VCC1 pad. Connect the power supply's ground to the GND pad.
- 6) Turn on the power supply and verify that the voltmeter at VCC2 reads over +5V.
- 7) Apply a logic signal to the DI PCB pad and GND. Using an oscilloscope, verify the signal at the A-B, RO2, and RO1 output pads.

The +5V supply powering the MAX3535E EV kit must be current limited at 1A.

## Detailed Description

The EV kit features a MAX3535E IC in a 28-pin wide SO surface-mount  package  and  demonstrates  the MAX3535E 2500VRMS isolated RS-485/RS-422 transceiver with ESD protection. The circuit's differential driver and receiver are configurable for full- or half-duplex operation and can communicate up to 1000kbps. The circuit is a 1/8 unit load on the receiver's bus.

The EV kit features PCB pads to ease interfacing with logic signals for the driver and receiver signals. On the nonisolated side, the DI pad is the driver input pad and the RO1 pad is the receiver-signal output pad. Resistor R3 pulls the DI pad up to VCC1, and resistor R4 pulls the DE pad up to VCC1. On the isolated side, the RO2 pad is the receiver output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3535E Evaluation Kit

## Jumper Selection

The MAX3535E EV kit features several jumpers to reconfigure the circuit's receiver/driver enable circuits, slew-rate control, and full- or half-duplex operation. Additionally, PCB pads are provided for connecting an external load to the isolated output at VCC2 and SGND.

## Table 1. Driver and Receiver Functions (JU1)

## Driver and Receiver Enable Selection

The MAX3535E EV kit features a 3-pin jumper (JU1) to set  the  MAX3535E driver and receiver output-enable modes. Table 1 lists the jumper options for the various modes of operation. Refer to the MAX3535E IC data sheet for more information on the MAX3535E DE and RE pin's driver/receiver modes of operation. See Table 3 for configuring the MAX3535E communication mode.

## Slew-Rate Selection

The MAX3535E EV kit features a 2-pin jumper (JU2) to set  the  MAX3535E communication slew rate. Table 2 lists  jumper  options  for  configuring  the  slew  rate  that will  affect  the  maximum  data  rate.  Refer  to  the MAX3535E IC data sheet for more information on the slew-rate configuration.

## Full-/Half-Duplex Communication Configuration

The MAX3535E EV kit features two jumpers that set the communication mode of operation (full duplex or half duplex). Jumpers JU3 and JU4 configure the circuit for the  mode (see Table 3 for configuration options). See Table 2 for reconfiguring the communication slew rate, which also impacts the maximum communication speed; see Table 1 for configuring the MAX3535E receiver and driver modes of operation.

## Resistors R1 and R2 Configuration

Pads are provided for pullup and pulldown resistors for the A-B lines, although the use of these resistors is purely optional. Pullup and pulldown resistors are used on the receiver inputs to guarantee a known state in the event that all nodes on the bus are in receive mode, or the cable becomes disconnected. The exact value for these resistors varies with the application. For example, a cable that is doubly terminated with 120 Ω resistors may use 750 Ω ,  while  an  unterminated  cable  may  use 10k Ω .  These resistors are not required because the MAX3535E has a fail-safe receiver designed to guarantee  a  high  output  in  the  event  a  cable  disconnects  or shorts between A-B. Use surface-mount 0805 case-size resistors for R1 and R2.

## Evaluating Other Transformer Configurations/Designs

Evaluating the HALO TGM-350NA Transformer Use the layout of the MAX3535E EV kit to evaluate other pin-for-pin  transformer  replacements for the TGM-340, provided with the EV kit. For example, the TGM-350, which has a 1:1 turns ratio and lowers the primary current consumption, can be used in place of the default transformer that has a 3:4 turns ratio. The lower turns ratio causes the circuit to have a lower output voltage, while being able to supply slightly more current. This lower output voltage implies an increase of the lower bound for the input-supply voltage. When used with the TGM-350 transformer, the input-supply voltage range is

<!-- image -->

| SHUNT LOCATION   | DE PIN                                           | RE PIN                                       | MAX3535E DRIVER/ RECEIVER MODE                                  |
|------------------|--------------------------------------------------|----------------------------------------------|-----------------------------------------------------------------|
| 1-2              | Connected to RE and R4 pulled up to V CC1        | Connected to DE and pulled up to V CC1 by R4 | Driver is enabled, receiver is disabled and vice versa.         |
| 2-3* (default)   | Connected to DE PC pad and R4 pulled up to V CC1 | Connected to GND                             | Receiver is always on and driver is enabled with the DE signal. |
| None*            | Connected to DE PC pad and R4 pulled up to V CC1 | Connected to RE PC pad only                  | Independent control of driver- and receiver- enable states.     |

Table 2. Slew-Rate Functions (JU2)

| SHUNT LOCATION   | SLO PIN           | SLEW-RATE (DATA RATE)   |
|------------------|-------------------|-------------------------|
| None             | Not connected     | Fast (up to 1000kbps)   |
| Installed        | Connected to SGND | Slow (up to 400kbps)    |

Table 3. Communication Mode Functions (JU3 and JU4)

| JU3 SHUNT LOCATION   | JU4 SHUNT LOCATION   | COMMUNICATION MODE   |
|----------------------|----------------------|----------------------|
| Installed            | Installed            | Half duplex          |
| None                 | None                 | Full duplex          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3535E Evaluation Kit

reduced to +3.6V to +5.5V. Other changes to the transformer turns ratio may be possible to suit the exact needs of the application. Refer to the MAX3535E IC data sheet for more information. Contact HALO Electronics to obtain a TGM-350NA transformer.

## Smaller Transformer and 2kV Isolation Design

The transformer (T1) is an integral part of the dielectricwithstand voltage of the EV kit circuit. The MAX3535E IC is guaranteed to withstand 2500VRMS for one minute

(min). However, the circuit uses an isolated transformer to  transfer  power from the primary side to the secondary side. The withstand voltage of the transformer, as well as the MAX3535E, must be considered when designing and testing the EV kit circuit. For example, if less than 3kV isolation is needed, a smaller 2kV transformer can be used to save board area, but the entire circuit will have only 2kV of isolation.

Figure 1. MAX3535E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3535E Evaluation Kit

<!-- image -->

Figure 2. MAX3535E EV Kit Component Placement GuideComponent Side

Figure 3. MAX3535E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX3535E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Boblet

5