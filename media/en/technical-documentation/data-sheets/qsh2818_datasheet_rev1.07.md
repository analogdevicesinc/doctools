<!-- lastmod 2023-09-25 -->
V 1.07

## QMOT QSH2818 MANUAL

+

<!-- image -->

+

## QSH-2818 -32-07-006

28mm

0.67A, 6Ncm

## QSH-2818 -51-07-012

28mm

0.67A, 12Ncm

<!-- image -->

## Table of Contents

| 1     | Life Support Policy.............................................................................................................................3                                                                                                                                   | Life Support Policy.............................................................................................................................3                                                                                                                                   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2     | Features ............................................................................................................................................4                                                                                                                              | Features ............................................................................................................................................4                                                                                                                              |
| 3     | Order Codes ......................................................................................................................................6                                                                                                                                 | Order Codes ......................................................................................................................................6                                                                                                                                 |
| 4     | Mechanical dimensions.....................................................................................................................7                                                                                                                                         | Mechanical dimensions.....................................................................................................................7                                                                                                                                         |
| 4.1   | Lead wire configuration.............................................................................................................7                                                                                                                                               | Lead wire configuration.............................................................................................................7                                                                                                                                               |
| 4.2   | Dimensions................................................................................................................................8                                                                                                                                         | Dimensions................................................................................................................................8                                                                                                                                         |
| 5     | Torque Figures ..................................................................................................................................9                                                                                                                                  | Torque Figures ..................................................................................................................................9                                                                                                                                  |
| 5.1   | Motor QSH2818-32-07-006.......................................................................................................9                                                                                                                                                     | Motor QSH2818-32-07-006.......................................................................................................9                                                                                                                                                     |
| 5.2   | Motor QSH2818-51-07-012.................................................................................................... 10                                                                                                                                                      | Motor QSH2818-51-07-012.................................................................................................... 10                                                                                                                                                      |
| 6     | Considerations for Operation ........................................................................................................ 11                                                                                                                                            | Considerations for Operation ........................................................................................................ 11                                                                                                                                            |
| 6.1   | Choosing the best fitting motor for an application................................................................ 11                                                                                                                                                               | Choosing the best fitting motor for an application................................................................ 11                                                                                                                                                               |
| 6.1.1 | Determining the maximum torque required................................................................. 11                                                                                                                                                                         | Determining the maximum torque required................................................................. 11                                                                                                                                                                         |
| 6.2   | Motor current setting............................................................................................................. 12                                                                                                                                               | Motor current setting............................................................................................................. 12                                                                                                                                               |
| 6.2.1 | Choosing the optimum current setting ......................................................................... 12                                                                                                                                                                   | Choosing the optimum current setting ......................................................................... 12                                                                                                                                                                   |
| 6.2.2 | Choosing the standby current ....................................................................................... 13                                                                                                                                                             | Choosing the standby current ....................................................................................... 13                                                                                                                                                             |
| 6.3   | Motor driver supply voltage................................................................................................... 14                                                                                                                                                   | Motor driver supply voltage................................................................................................... 14                                                                                                                                                   |
| 6.3.1 | Determining if the given driver voltage is sufficient ..................................................... 14                                                                                                                                                                      | Determining if the given driver voltage is sufficient ..................................................... 14                                                                                                                                                                      |
| 6.4   | Back EMF (BEMF).................................................................................................................... 16                                                                                                                                              | Back EMF (BEMF).................................................................................................................... 16                                                                                                                                              |
| 6.5   | Choosing the commutation scheme....................................................................................... 16                                                                                                                                                           | Choosing the commutation scheme....................................................................................... 16                                                                                                                                                           |
|       | 6.5.1 Fullstepping.................................................................................................................... 18                                                                                                                                           | 6.5.1 Fullstepping.................................................................................................................... 18                                                                                                                                           |
|       | Avoiding motor resonance in fullstep operation ................................................ 18                                                                                                                                                                                  | Avoiding motor resonance in fullstep operation ................................................ 18                                                                                                                                                                                  |
| 6.6   |                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                     |
|       | Optimum motor settings........................................................................................................ 18 Revision history.............................................................................................................................. 19 | Optimum motor settings........................................................................................................ 18 Revision history.............................................................................................................................. 19 |
|       | 7.1 Documentation revision......................................................................................................... 19                                                                                                                                              | 7.1 Documentation revision......................................................................................................... 19                                                                                                                                              |

## 1 Life Support Policy

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2023

Information given in this data sheet is believed to be accurate and reliable. However, neither responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result from its use.

Specifications are subject to change without notice.

## 2 Features

These two-phase hybrid stepper motors are optimized for microstepping and give a good fit to the TRINAMIC family of motor controllers and drivers.

## Main characteristics:

- NEMA 11 mounting configuration
- Flange max. 28.0mm * 28.0mm
- 5mm axis diameter, 20mm axis length
- S tep angle: 1.8˚
- Optimized for microstep operation
- Up to 36V operating voltage
- Optimum fit for TMC236 / TMC246 / TMC262 / TMC261 / TMC2660 / TMC2208 / TMC2209 / TMC5130 / TMC2130 / TMC2300 / TMC5240 / TMC2240 / TMC2210 stepper motor drivers
- 4 wire connection

Table 1 : Motor technical data

| Specifications                      | Parameter   | Units   | QSH2818    | QSH2818    |
|-------------------------------------|-------------|---------|------------|------------|
|                                     |             |         | -32-07-006 | -51-07-012 |
| Rated Voltage                       | V RATED     | V       | 3.8        | 6.2        |
| Rated Phase Current                 | I RMS_RATED | A       | 0.67       | 0.67       |
| Phase Resistance at 20°C            | R COIL      | Ω       | 5.6        | 9.2        |
| Phase Inductance (typ.)             |             | mH      | 3.4        | 7.2        |
| Holding Torque (typ.)               |             | Ncm     | 6          | 12         |
| Holding Torque (typ.)               |             | oz in   | 8.5        | 17.0       |
| Detent Torque                       |             | Ncm     |            |            |
| Rotor Inertia                       |             | g cm 2  | 9          | 18         |
| Weight (Mass)                       |             | Kg      | 0.11       | 0.2        |
| Insulation Class                    |             |         | B          | B          |
| Insulation Resistance               |             | Ω       | 100M       | 100M       |
| Dialectic Strength (for one minute) |             | VAC     | 500        | 500        |
| Connection Wires                    |             | N°      | 4          | 4          |
| Max applicable Voltage              |             | V       | 36         | 36         |

| Step angle                                    |       | °   | 1.8       | 1.8       |
|-----------------------------------------------|-------|-----|-----------|-----------|
| Step angle Accuracy (max.)                    |       | %   | 5         | 5         |
| Flange Size (max.)                            |       | mm  | 28.0      | 28.0      |
| Motor Length (max.)                           | L MAX | mm  | 32        | 51        |
| Axis Diameter                                 |       | mm  | 5.0       | 5.0       |
| Axis Length (typ.)                            |       | mm  | 20.0      | 20.0      |
| Shaft Radial Play (450g load)                 |       | mm  | 0.02      | 0.02      |
| Shaft Axial Play (450g load)                  |       | mm  | 0.08      | 0.08      |
| Maximum Radial Force (20 mmfrom front flange) |       | N   | 28        | 28        |
| Maximum Axial Force                           |       | N   | 10        | 10        |
| Ambient Temperature                           |       | °C  | -20 … +50 | -20 … +50 |
| Temp Rise (rated current, 2phase on)          |       | °C  | max. 80   | max. 80   |
| Winding Thermal Time Constant                 |       | min | 10        | 12        |
| Surface Thermal Time Constant                 |       | min | 12        | 19        |

## 3 Order Codes

Table 2 : Order Codes

| Order code         | Description                            | Dimensions (mm)   |
|--------------------|----------------------------------------|-------------------|
| QSH2818-32-07- 006 | QMot stepper motor 28mm, 0.67A, 6 Ncm  | 28 x 28 x 32      |
| QSH2818-51-07- 012 | QMot stepper motor 28mm, 0.67A, 12 Ncm | 28 x 28 x 51      |

## 4 Mechanical dimensions

## 4.1 Lead wire configuration

Figure 1 : Lead wire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Black        | UL1430 AWG26 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| Green        | UL1430 AWG26 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Red          | UL1430 AWG26 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Blue         | UL1430 AWG26 | B-     | Motor coil B pin 2 | 300mm+/-10mm |

Table 3 : Lead wire configuration

<!-- image -->

## 4.2 Dimensions

Figure 2 : Dimensions (all values in mm)

<!-- image -->

28

| QSH2818   |   -32-07-006 |   -51-07-012 |
|-----------|--------------|--------------|
| Length    |           32 |           51 |

## 5 Torque Figures

The torque figures detail motor torque characteristics for half and full step. For half and full step operation there are always several resonance points (with less torque) which are not depicted. These will be minimized by microstep operation in most applications.

## 5.1 Motor QSH2818-32-07-006

Testing conditions: VM: 24V 0.67A /Phase Driver, SMD 103

Figure 3 : QSH2818-32-07-006 speed vs. torque characteristics

<!-- image -->

## 5.2 Motor QSH2818-51-07-012

Testing conditions: VM: 24V 0.67A /Phase Driver, SMD 103

Figure 4 : QSH2818-51-07-012 speed vs. torque characteristics

<!-- image -->

## 6 Considerations for Operation

The following chapters try to help you to correctly set the key operation parameters to get a stable system.

## 6.1 Choosing the best fitting motor for an application

For an optimum solution it is important to fit the motor to the application and to choose the best mode of operation. The key parameters are desired motor torque and velocity. While the motor holding torque describes the torque at stand-still, and gives a good indication for comparing different motors, it is not the key parameter for the best fitting motor. The required torque is a result of static load on the motor, dynamic loads which occur during acceleration/deceleration and loads due to friction. In most  applications  the  load  at  maximum  desired  motor  velocity  is  most  critical,  because  of  the reduction of motor torque at higher velocity. While the required velocity generally is well known, the required  torque  often  is  only  roughly  known.  Generally,  longer  motors  and  motors  with  a  larger diameter deliver a higher torque. But, using the same driver voltage for the motor, the larger motor earlier loses torque when increasing motor velocity. This means, that for a high torque at a high motor velocity, the smaller motor might be the better fitting solution.

Please refer to the torque vs. velocity diagram to determine the best fitting motor, which delivers enough torque at your desired velocities.

## 6.1.1 Determining the maximum torque required

Try a motor which should roughly fit. Take into consideration worst case conditions, i.e., minimum driver supply voltage and minimum  driver current,  maximum,  or  minimum  environment temperature (whichever is worse) and maximum friction of mechanics. Now, consider that you want to be on the safe side, and add some 10 percent safety margin considering unknown degradation of mechanics and motor.

## 6.2 Motor current setting

Basically, the motor torque is proportional to the motor current if the current stays at a reasonable level. At the same time, the power consumption of the motor (and driver) is proportional to the square of the motor current. Optimally, the motor should be chosen to bring the required performance at the rated motor current. For a short time, the motor current may be raised above this level to get increased torque,  but  care  must  be  taken  in  order  not  to  exceed  the  maximum  coil  temperature  of  130°C respectively a continuous motor operation temperature of 90°C.

Table 4 : Motor current settings

| Percentage of rated current   | Percentage of motor torque   | Percentage of static motor power dissipation   | Comment                                                                              |
|-------------------------------|------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------|
| 150%                          | ≤150%                        | 225%                                           | Limit operation to a few seconds                                                     |
| 125%                          | 125%                         | 156%                                           | Operation possible for a limited time                                                |
| 100%                          | 100%                         | 100% = 2 * I RMS_RATED * R COIL                | Normal operation                                                                     |
| 85%                           | 85%                          | 72%                                            | Normal operation                                                                     |
| 75%                           | 75%                          | 56%                                            | Normal operation                                                                     |
| 50%                           | 50%                          | 25%                                            | Reduced microstep exactness due to torque reducing in the magnitude of detent torque |
| 38%                           | 38%                          | 14%                                            | - ' -                                                                                |
| 25%                           | 25%                          | 6%                                             | - ' -                                                                                |
| 0%                            | see detent torque            | 0%                                             | Motor might lose position if the application's friction is too low                   |

## 6.2.1 Choosing the optimum current setting

Generally, you choose the motor to give the desired performance at nominal current. For short time operation, you might want to increase the motor current to get a higher torque than specified for the motor. In a hot environment, you might want to work with a reduced motor current to reduce motor self-heating.

## The TRINAMIC drivers allow setting the motor current for up to three conditions:

- -Standstill (choose a low current)
- -Nominal operation (nominal current)
- -High acceleration (if increased torque is required: You may choose a current above the nominal setting, but be aware, that the mean power dissipation shall not exceed the motors nominal rating)

If  you  reach  the  velocity  limit,  it  might  be  a  good  idea  to  reduce  the  motor  current,  to  avoid resonances occurring. Please refer to the information about choosing the driver voltage.

## 6.2.2 Choosing the standby current

Most applications do not need much torque during motor stand-still. You should always reduce motor current during stand still. This reduces power dissipation and heat generation. Depending on your application, you typically at least can half power dissipation. There are several aspects why this is possible: In standstill, motor torque is higher than at any other velocity. Thus, you do not need the full current even with a static load! Your application might need no torque at all, but you might need to keep the exact microstep position. Try how low you can go in your application. If the microstep position exactness does not matter for the time of standstill, you might even reduce the motor current to zero if there is no static load on the motor and enough friction to avoid complete position loss.

## 6.3 Motor driver supply voltage

The driver supply voltage in many applications cannot be chosen freely, because other components have a fixed supply voltage of, e.g., 24V DC. If you have possibility to choose the driver supply voltage, please refer to the driver data sheet, and consider that a higher voltage means a higher torque at higher velocity. The motor torque diagrams are measured for a given supply voltage. You typically can scale the velocity axis (steps/sec) proportionally to the supply voltage to adapt the curve, e.g., if the curve is measured for 48V and you consider operation at 24V, half all values on the x-Axis to get an idea of the motor performance.

For a chopper driver, consider the following corner values for the driver supply voltage (motor voltage). The table is based on the nominal motor voltage, which normally just has a theoretical background to determine the resistive loss in the motor.

## Comment on the nominal motor voltage:

(Please refer to motor technical data table.)

Table 5 : Driver supply voltage considerations

| Parameter                           | Value                                  | Comment                                                                                                                                                                                                        |
|-------------------------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Minimum driver supply voltage       | 2 * U COIL_NOM                         | Very limited motor velocity. Only slow movement without torque reduction. Chopper noise might become audible.                                                                                                  |
| Optimum driver supply voltage       | ≥ 4 * U COIL_NOM and ≤ 22 * U COIL_NOM | Choose the best fitting voltage in this range using the motor torque curve and the driver data. You can scale the torque curve proportionally to the actual driver supply voltage.                             |
| Maximum rated driver supply voltage | 25 * U COIL_NOM                        | When exceeding this value, the magnetic switching losses in the motor reach a relevant magnitude and the motor might get too hot at nominal current. Thus, there is no benefit in further raising the voltage. |

## 6.3.1 Determining if the given driver voltage is sufficient

Try to brake the motor and listen to it at different velocities. Does the sound of the motor get raucous or harsh when exceeding some velocity? Then the motor gets into a resonance area. The reason is that the motor back-EMF voltage reaches the supply voltage. Thus, the driver cannot bring the full

UCOIL\_NOM = I RMS\_RATED * RCOIL

current into the motor anymore. This is typically a sign, that the motor velocity should not be further increased, because resonances and reduced current affect motor torque.

## Measure the motor coil current at maximum desired velocity

For microstepping:

If the waveform is still basically sinusoidal, the motor driver supply voltage is sufficient.

For Fullstepping:

If  the  motor  current  still  reaches  a  constant  plateau,  the  driver  voltage  is sufficient.

If you determine that the voltage is not sufficient, you could either increase the voltage or reduce the current (and thus torque).

## 6.4 Back EMF (BEMF)

Within SI units, the numeric value of the BEMF constant has the same numeric value as the numeric value of the torque constant. For example, a motor with a torque constant of 1 Nm/A would have a BEMF constant  of  1V/rad/s.  Turning  such  a  motor  with  1  rps  (1  rps  =  1  revolution  per  second  = 6.28 rad/s) generates a BEMF voltage of 6.28V.

The Back EMF constant can be calculated as:

<!-- formula-not-decoded -->

The voltage is valid as RMS voltage per coil, thus the nominal current INOM is multiplied by 2 in this formula, since the nominal current assumes a full step position, with two coils switched on. The torque is in unit [Nm] where 1Nm = 100cNm = 1000mNm.

One can easily measure the BEMF constant of a two-phase stepper motor with a (digital) scope. One just must measure the voltage of one coil (one phase) when turning the axis of the motor manually. With this, one gets a voltage (amplitude) and a frequency of a periodic voltage signal (sine wave). The full step frequency is 4 times the frequency the measured sine wave.

## 6.5 Choosing the commutation scheme

While the motor performance curves are depicted for fullstepping and halfstepping, most modern drivers provide a microstepping scheme. Microstepping uses a discrete sine and a cosine wave to drive both coils of  the  motor  and  gives  a  very  smooth motor  behavior  as  well  as  an  increased  position resolution. The amplitude of the waves is 1.41 times the nominal motor current, while the RMS values equal the nominal motor current. The stepper motor does not make loud steps anymore -it  turns smoothly!  Therefore,  16  microsteps  or  more  are  recommended  for  a  smooth  operation  and  the avoidance  of  resonances.  To  operate  the  motor  at  fullstepping,  some  considerations  should  be considered.

Table 6 : Comparing microstepping and fullstepping

| Driver Scheme                                               | Resolution                                | Velocity range                                                            | Torque                                                                       | Comments                                                              |
|-------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Fullstepping                                                | 200 steps per rotation                    | Low to very high. Skip resonance areas in low to medium velocity range.   | Full torque if dam- pener used, otherwise reduced torque in re- sonance area | Audible noise especially at low velocities                            |
| Halfstepping                                                | 200 steps per rotation * 2                | Low to very high. Skip resonance areas in low to me- dium velocity range. | Full torque if dam- pener used, otherwise reduced torque in re- sonance area | Audible noise especially at low velocities                            |
| Microstepping                                               | 200 * (number of microsteps) per rotation | Low to high.                                                              | Reduced torque at very high velocity                                         | Low noise, smooth motor behavior                                      |
| Mixed: Micro- stepping and fullstepping for high velocities | 200 * (number of microsteps) per rotation | Low to very high.                                                         | Full torque                                                                  | At high velocities, there is no audible difference for full- stepping |

Microstepping gives the best performance for most applications and can be considered as state-of-the art.  However,  fullstepping  allows  some  ten  percent  higher  motor  velocities,  when  compared  to microstepping. A combination of microstepping at low and medium velocities and fullstepping at high velocities gives best performance at all velocities and is most universal. Most Trinamic driver modules support all three modes.

## 6.5.1 Fullstepping

When operating the motor in fullstep, resonances may occur. The resonance frequencies depend on the motor load. When the motor gets into a resonance area, it even might not turn anymore! Thus, you should avoid resonance frequencies.

## 6.5.1.1 Avoiding motor resonance in fullstep operation

Do not operate the motor at resonance velocities for extended periods of time. Use a reasonably high acceleration to accelerate to a resonance-free velocity. This avoids the build-up of resonances. When resonances occur at very high velocities, try reducing the current setting.

A resonance dampener might be required if the resonance frequencies cannot be skipped

## 6.6 Optimum motor settings

The following table shows the settings for the highest reachable fullstep velocities.

Table 7 : Optimum motor settings

| Optimum Motor Settings                          | Unit   | QSH2818    | QSH2818    |
|-------------------------------------------------|--------|------------|------------|
|                                                 |        | -32-07-006 | -51-07-012 |
| Motor current (RMS)                             | A      | 0.67       | 0.67       |
| Motor voltage                                   | V      | 24         | 24         |
| Maximum microstep velocity = Fullstep threshold | RPS    | 5.817      | 4.578      |
| Maximum fullstep velocity                       | RPS    | 12.875     | 9.155      |

## 7 Revision history

## 7.1 Documentation revision

Table 8 : Documentation revision

|   Version | Comment         | Description                                                                                           |
|-----------|-----------------|-------------------------------------------------------------------------------------------------------|
|      1    | Initial Release |                                                                                                       |
|      1.01 | 2007-JUN-07     | Chapter 6.6 optimum motor settings added                                                              |
|      1.02 | 2007-NOV-13     | Chapter 6.4 Back EMF (BEMF) added                                                                     |
|      1.03 | 2010-AUG-11     | New technical drawing of the motor, minor changes                                                     |
|      1.04 | 2010-OCT-19     | Minor changes                                                                                         |
|      1.05 | 2019-DEC-11     | Wire type update to UL1430 Company address update. Motor Drawings updated. TMCM-110 settings removed. |
|      1.06 | 2020-AUG-14     | Motor cable length information added. Thermal time constant information added.                        |
|      1.07 | 2023-APR-24     | Typos and layout corrected.                                                                           |